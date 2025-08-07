import { DataTypes } from 'sequelize';
import { sequelize } from '../config.mjs';

const MeetingMember = sequelize.define('MeetingMember', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  meeting_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'meetings',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  contact_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'contacts',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  }
}, {
  tableName: 'meeting_members'
});

export default MeetingMember;