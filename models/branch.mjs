import { DataTypes } from 'sequelize';
import { sequelize } from '../config.mjs';

const Branch = sequelize.define('Branch', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  slug: {
    type: DataTypes.STRING(50),
    unique: true
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
  name: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  address: {
    type: DataTypes.TEXT
  },
  status: {
    type: DataTypes.STRING(50)
  },
  created: {
    type: DataTypes.DATE
  },
  modified: {
    type: DataTypes.DATE
  }
}, {
  tableName: 'branches'
});

export default Branch;