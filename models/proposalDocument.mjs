import { DataTypes } from 'sequelize';
import { sequelize } from '../config.mjs';

const ProposalDocument = sequelize.define('ProposalDocument', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  proposal_id: {
    type: DataTypes.STRING(50),
    references: {
      model: 'meeting_proposals',
      key: 'proposal_id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  doc_path: {
    type: DataTypes.STRING(255)
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
  tableName: 'proposal_documents'
});

export default ProposalDocument;