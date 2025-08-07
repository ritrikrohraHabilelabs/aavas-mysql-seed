import { DataTypes } from 'sequelize';
import { sequelize } from '../config.mjs';

const Device = sequelize.define('Device', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  device_id: {
    type: DataTypes.STRING(64)
  },
  device_type: {
    type: DataTypes.STRING(50)
  },
  reg_id: {
    type: DataTypes.STRING(255)
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'users',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  status: {
    type: DataTypes.STRING(20)
  }
}, {
  tableName: 'devices'
});

export default Device;