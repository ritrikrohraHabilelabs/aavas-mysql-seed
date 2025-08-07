import { DataTypes } from 'sequelize';
import { sequelize } from '../config.mjs';

const MeetingAction = sequelize.define('MeetingAction', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  slug: {
    type: DataTypes.STRING(50),
    unique: true
  },
  action_id: {
    type: DataTypes.INTEGER
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
    references: {
      model: 'contacts',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  name: {
    type: DataTypes.STRING(255)
  },
  due_date: {
    type: DataTypes.DATEONLY
  },
  meeting_decisions: {
    type: DataTypes.TEXT
  },
  status: {
    type: DataTypes.STRING(50)
  },
  created_by: {
    type: DataTypes.INTEGER,
    references: {
      model: 'users',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  created: {
    type: DataTypes.DATE
  }
}, {
  tableName: 'meeting_actions'
});

export default MeetingAction;