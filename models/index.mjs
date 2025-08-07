// models/index.js
import { sequelize } from '../config.mjs';

import Bank from './bank.mjs';
import Branch from './branch.mjs';
import Contact from './contact.mjs';
import Device from './device.mjs';
import Group from './group.mjs';
import Meeting from './meeting.mjs';
import MeetingAction from './meetingAction.mjs';
import MeetingMember from './meetingMember.mjs';
import MeetingProposal from './meetingProposal.mjs';
import Product from './product.mjs';
import ProposalDocument from './proposalDocument.mjs';
import Role from './role.mjs';
import Setting from './setting.mjs';
import User from './user.mjs';

// === Associations

// Roles <-> Users
Role.hasMany(User, { foreignKey: 'role_id' });
User.belongsTo(Role, { foreignKey: 'role_id' });

// Banks <-> Branches
Bank.hasMany(Branch, { foreignKey: 'bank_id' });
Branch.belongsTo(Bank, { foreignKey: 'bank_id' });

// Banks <-> Contacts? (bank_name in contacts is string, so no FK here)

// Banks <-> Meetings
Bank.hasMany(Meeting, { foreignKey: 'bank_id' });
Meeting.belongsTo(Bank, { foreignKey: 'bank_id' });

// Branches <-> Meetings
Branch.hasMany(Meeting, { foreignKey: 'branch_id' });
Meeting.belongsTo(Branch, { foreignKey: 'branch_id' });

// Users <-> Meetings (created_by)
User.hasMany(Meeting, { foreignKey: 'created_by' });
Meeting.belongsTo(User, { foreignKey: 'created_by' });

// Meetings <-> MeetingMembers
Meeting.hasMany(MeetingMember, { foreignKey: 'meeting_id' });
MeetingMember.belongsTo(Meeting, { foreignKey: 'meeting_id' });

// Contacts <-> MeetingMembers
Contact.hasMany(MeetingMember, { foreignKey: 'contact_id' });
MeetingMember.belongsTo(Contact, { foreignKey: 'contact_id' });

// Meetings <-> MeetingActions
Meeting.hasMany(MeetingAction, { foreignKey: 'meeting_id' });
MeetingAction.belongsTo(Meeting, { foreignKey: 'meeting_id' });

// Contacts <-> MeetingActions (as action owners)
Contact.hasMany(MeetingAction, { foreignKey: 'contact_id' });
MeetingAction.belongsTo(Contact, { foreignKey: 'contact_id' });

// Users <-> MeetingActions (created_by)
User.hasMany(MeetingAction, { foreignKey: 'created_by' });
MeetingAction.belongsTo(User, { foreignKey: 'created_by' });

// Meetings <-> MeetingProposals
Meeting.hasMany(MeetingProposal, { foreignKey: 'meeting_id' });
MeetingProposal.belongsTo(Meeting, { foreignKey: 'meeting_id' });

// Banks <-> MeetingProposals
Bank.hasMany(MeetingProposal, { foreignKey: 'bank_id' });
MeetingProposal.belongsTo(Bank, { foreignKey: 'bank_id' });

// Products <-> MeetingProposals
Product.hasMany(MeetingProposal, { foreignKey: 'product_id' });
MeetingProposal.belongsTo(Product, { foreignKey: 'product_id' });

// Users <-> MeetingProposals (created_by)
User.hasMany(MeetingProposal, { foreignKey: 'created_by' });
MeetingProposal.belongsTo(User, { foreignKey: 'created_by' });

// MeetingProposals <-> ProposalDocuments
MeetingProposal.hasMany(ProposalDocument, { foreignKey: 'proposal_id', sourceKey: 'proposal_id' });
ProposalDocument.belongsTo(MeetingProposal, { foreignKey: 'proposal_id', targetKey: 'proposal_id' });

// Users <-> ProposalDocuments (created_by)
User.hasMany(ProposalDocument, { foreignKey: 'created_by' });
ProposalDocument.belongsTo(User, { foreignKey: 'created_by' });

// Users <-> Devices
User.hasMany(Device, { foreignKey: 'user_id' });
Device.belongsTo(User, { foreignKey: 'user_id' });

// Users <-> Groups
User.hasMany(Group, { foreignKey: 'user_id' });
Group.belongsTo(User, { foreignKey: 'user_id' });

export {
  sequelize,
  Bank,
  Branch,
  Contact,
  Device,
  Group,
  Meeting,
  MeetingAction,
  MeetingMember,
  MeetingProposal,
  Product,
  ProposalDocument,
  Role,
  Setting,
  User
};
