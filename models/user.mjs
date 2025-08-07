import { DataTypes } from 'sequelize';
import { sequelize } from '../config.mjs';

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  slug: {
    type: DataTypes.STRING(50),
    unique: true
  },
  name: {
    type: DataTypes.STRING(255)
  },
  email: {
    type: DataTypes.STRING(255)
  },
  contact: {
    type: DataTypes.STRING(20)
  },
  address: {
    type: DataTypes.TEXT
  },
  username: {
    type: DataTypes.STRING(255),
    unique: true
  },
  password: {
    type: DataTypes.STRING(255)
  },
  role_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'roles',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  image_path: {
    type: DataTypes.STRING(255)
  },
  new_password_token: {
    type: DataTypes.STRING(255)
  },
  forgot_password_token: {
    type: DataTypes.STRING(255)
  },
  current_lat: {
    type: DataTypes.STRING(50)
  },
  current_long: {
    type: DataTypes.STRING(50)
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
  tableName: 'users'
});

export default User;