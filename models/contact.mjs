import { DataTypes } from 'sequelize';
import { sequelize } from '../config.mjs';

const Contact = sequelize.define('Contact', {
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
  email: {
    type: DataTypes.STRING(255)
  },
  user_type: {
    type: DataTypes.STRING(255)
  },
  mobile: {
    type: DataTypes.STRING(15)
  },
  address: {
    type: DataTypes.TEXT
  },
  designation: {
    type: DataTypes.STRING(255)
  },
  department: {
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
  },
  landlineno: {
    type: DataTypes.STRING(20)
  },
  bank_name: {
    type: DataTypes.STRING(255)
  }
}, {
  tableName: 'contacts'
});

export default Contact;