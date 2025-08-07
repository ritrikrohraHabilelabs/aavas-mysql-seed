import { sequelize } from './config.mjs';
import { seedData } from './seedData.mjs';
import {
  Bank, Branch, Contact, Device, Group, Meeting, MeetingAction,
  MeetingMember, MeetingProposal, Product, ProposalDocument,
  Role, Setting, User
} from './models/index.mjs';

const models = {
  Role, Bank, Product, User, Branch, Contact, Device, Group,
  Meeting, MeetingMember, MeetingAction, MeetingProposal,
  ProposalDocument, Setting
};

async function syncDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Database connection established.');
    
    await sequelize.sync({ force: true });
    console.log('Database synced.');
  } catch (error) {
    console.error('Database sync failed:', error);
    throw error;
  }
}

async function seedDatabase() {
  const seedOrder = [
    { model: Role, data: seedData.roles },
    { model: Bank, data: seedData.banks },
    { model: Product, data: seedData.products },
    { model: User, data: seedData.users },
    { model: Branch, data: seedData.branches },
    { model: Contact, data: seedData.contacts },
    { model: Device, data: seedData.devices },
    { model: Group, data: seedData.groups },
    { model: Meeting, data: seedData.meetings },
    { model: MeetingMember, data: seedData.meetingMembers },
    { model: MeetingAction, data: seedData.meetingActions },
    { model: MeetingProposal, data: seedData.meetingProposals },
    { model: ProposalDocument, data: seedData.proposalDocuments },
    { model: Setting, data: seedData.settings }
  ];

  for (const { model, data } of seedOrder) {
    if (data?.length) {
      await model.bulkCreate(data);
      console.log(`Seeded ${model.name}: ${data.length} records`);
    }
  }
}

async function main() {
  try {
    await syncDatabase();
    await seedDatabase();
    console.log('✅ Database seeding completed successfully!');
  } catch (error) {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  } finally {
    await sequelize.close();
  }
}

main();