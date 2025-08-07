import { sequelize } from './config.mjs';
import {
  Meeting, Bank, Branch, User, Contact, MeetingMember,
  MeetingProposal, Product, ProposalDocument, MeetingAction
} from './models/index.mjs';

async function getMeetingReport(meetingId) {
  const meeting = await Meeting.findByPk(meetingId, {
    include: [
      { model: Bank, attributes: ['name', 'head_office_city'] },
      { model: Branch, attributes: ['name', 'address'] },
      { model: User, attributes: ['name', 'email'] }
    ]
  });

  const participants = await MeetingMember.findAll({
    where: { meeting_id: meetingId },
    include: [{ model: Contact, attributes: ['name', 'email', 'designation', 'department', 'user_type'] }]
  });

  const proposals = await MeetingProposal.findAll({
    where: { meeting_id: meetingId },
    include: [
      { model: Product, attributes: ['name'] },
      { model: ProposalDocument, attributes: ['doc_path'] }
    ]
  });

  const actions = await MeetingAction.findAll({
    where: { meeting_id: meetingId },
    include: [{ model: Contact, attributes: ['name'] }]
  });

  return generateReport(meeting, participants, proposals, actions);
}

function generateReport(meeting, participants, proposals, actions) {
  const date = new Date(meeting.meeting_date_time).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric'
  });

  let report = `On ${date}, ${meeting.Bank.name} (branch: ${meeting.Branch.name}, city: ${meeting.Bank.head_office_city}, address: ${meeting.Branch.address}) held a meeting (${meeting.meeting_id}) in ${meeting.location} with agenda "${meeting.agenda}". The main discussion points included: ${meeting.discussion_points}, and the final decision was: ${meeting.decisions}. The meeting was created by ${meeting.User.name} (${meeting.User.email}).\n\n`;

  if (participants.length > 0) {
    report += `Participants: ${participants.map(p => 
      `${p.Contact.name} (${p.Contact.designation}, ${p.Contact.department}, ${p.Contact.email})`
    ).join(', ')}.\n\n`;
  }

  if (proposals.length > 0) {
    report += `Proposals Discussed:\n\n`;
    proposals.forEach(p => {
      report += `Proposal ${p.proposal_id}, sector: ${p.sector}, ROI: ${p.roi}%, processing fee: ${p.processing_fee}%, margin: ${p.margin}%, guarantee: ${p.guarantee}, servicing fees: ${p.servicing_fees}%, stage: ${p.stage}, status: ${p.status}, product: ${p.Product?.name || 'N/A'}`;
      if (p.ProposalDocuments?.length > 0) {
        report += `, documents: ${p.ProposalDocuments.map(d => d.doc_path).join(', ')}`;
      }
      report += `.\n\n`;
    });
  }

  if (actions.length > 0) {
    report += `Actions Assigned:\n\n`;
    actions.forEach(a => {
      report += `${a.name} (Assigned to: ${a.Contact?.name || 'Unassigned'}), due by ${new Date(a.due_date).toISOString().split('T')[0]}, status: ${a.status}, note: ${a.meeting_decisions}.\n\n`;
    });
  }

  report += `Meeting status: ${meeting.status}.`;
  return report;
}

async function main() {
  try {
    await sequelize.authenticate();
    
    const meetingId = process.argv[2] || 700;
    const report = await getMeetingReport(meetingId);
    
    console.log('='.repeat(80));
    console.log(`MEETING REPORT - ID: ${meetingId}`);
    console.log('='.repeat(80));
    console.log(report);
    console.log('='.repeat(80));
    
  } catch (error) {
    console.error('Error generating report:', error);
  } finally {
    await sequelize.close();
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { getMeetingReport };