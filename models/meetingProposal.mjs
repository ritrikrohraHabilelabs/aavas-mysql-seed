import { DataTypes } from 'sequelize';
import { sequelize } from '../config.mjs';

const MeetingProposal = sequelize.define('MeetingProposal', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  slug: {
    type: DataTypes.STRING(50),
    unique: true
  },
  proposal_id: {
    type: DataTypes.STRING(50),
    unique: true
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
  bank_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'banks',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  sector: {
    type: DataTypes.STRING(255)
  },
  roi: {
    type: DataTypes.FLOAT
  },
  processing_fee: {
    type: DataTypes.FLOAT
  },
  margin: {
    type: DataTypes.FLOAT
  },
  guarantee: {
    type: DataTypes.STRING(50)
  },
  servicing_fees: {
    type: DataTypes.FLOAT
  },
  product_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'products',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  stage: {
    type: DataTypes.STRING(255)
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
  }
}, {
  tableName: 'meeting_proposals'
});

export default MeetingProposal;