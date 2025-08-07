import { DataTypes } from 'sequelize';
import { sequelize } from '../config.mjs';

const Bank = sequelize.define('Bank', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  slug: {
    type: DataTypes.STRING(50),
    unique: true
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  head_office_city: {
    type: DataTypes.STRING(255)
  },
  img_path: {
    type: DataTypes.STRING(255)
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
  tableName: 'banks'
});

export default Bank;