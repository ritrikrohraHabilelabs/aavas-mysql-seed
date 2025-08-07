import { DataTypes } from 'sequelize';
import { sequelize } from '../config.mjs';

const Group = sequelize.define('Group', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'users',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  title: {
    type: DataTypes.STRING(255)
  },
  status: {
    type: DataTypes.INTEGER
  },
  supper: {
    type: DataTypes.INTEGER
  },
  created: {
    type: DataTypes.DATE
  },
  modified: {
    type: DataTypes.DATE
  }
}, {
  tableName: 'groups'
});

export default Group;