import { sequelize } from './config.mjs';
import { Meeting } from './models/index.mjs';
import { getMeetingReport } from './meetingReport.mjs';

async function generateAllReports() {
  try {
    await sequelize.authenticate();
    
    const meetings = await Meeting.findAll({ attributes: ['id', 'meeting_id'] });
    
    for (const meeting of meetings) {
      console.log(`\n${'='.repeat(100)}`);
      console.log(`MEETING REPORT - ${meeting.meeting_id} (ID: ${meeting.id})`);
      console.log('='.repeat(100));
      
      const report = await getMeetingReport(meeting.id);
      console.log(report);
    }
    
    console.log(`\n${'='.repeat(100)}`);
    console.log(`Generated ${meetings.length} meeting reports`);
    console.log('='.repeat(100));
    
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await sequelize.close();
  }
}

generateAllReports();