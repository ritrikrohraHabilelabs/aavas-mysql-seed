import { DataTypes } from 'sequelize';
import { sequelize } from '../config.mjs';

const Meeting = sequelize.define('Meeting', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  slug: {
    type: DataTypes.STRING(50),
    unique: true
  },
  meeting_id: {
    type: DataTypes.STRING(255)
  },
  bank_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'banks',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT'
  },
  branch_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'branches',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  contact_number: {
    type: DataTypes.STRING(50)
  },
  meeting_date_time: {
    type: DataTypes.DATE
  },
  location: {
    type: DataTypes.STRING(255)
  },
  agenda: {
    type: DataTypes.TEXT
  },
  decisions: {
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
  },
  modified: {
    type: DataTypes.DATE
  },
  discussion_points: {
    type: DataTypes.TEXT
  }
}, {
  tableName: 'meetings'
});

export default Meeting;