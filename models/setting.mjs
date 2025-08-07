import { DataTypes } from 'sequelize';
import { sequelize } from '../config.mjs';

const Setting = sequelize.define('Setting', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING(255)
  },
  owner: {
    type: DataTypes.STRING(255)
  },
  address: {
    type: DataTypes.TEXT
  },
  email: {
    type: DataTypes.STRING(255)
  },
  email_2: {
    type: DataTypes.STRING(255)
  },
  mobile: {
    type: DataTypes.STRING(20)
  },
  phone: {
    type: DataTypes.STRING(20)
  },
  logo: {
    type: DataTypes.STRING(255)
  },
  meta_title: {
    type: DataTypes.STRING(255)
  },
  meta_keyword: {
    type: DataTypes.STRING(255)
  },
  meta_description: {
    type: DataTypes.TEXT
  },
  fb_link: {
    type: DataTypes.STRING(255)
  },
  twitter_link: {
    type: DataTypes.STRING(255)
  },
  in_link: {
    type: DataTypes.STRING(255)
  },
  gpluse_link: {
    type: DataTypes.STRING(255)
  },
  youtube_link: {
    type: DataTypes.STRING(255)
  },
  config_google_analytics: {
    type: DataTypes.STRING(255)
  },
  config_mail_protocol: {
    type: DataTypes.STRING(50)
  },
  config_smtp_port: {
    type: DataTypes.STRING(10)
  },
  config_smtp_host: {
    type: DataTypes.STRING(255)
  },
  config_smtp_username: {
    type: DataTypes.STRING(255)
  },
  config_smtp_password: {
    type: DataTypes.STRING(255)
  },
  config_smtp_timeout: {
    type: DataTypes.STRING(10)
  },
  default_status: {
    type: DataTypes.INTEGER
  },
  status: {
    type: DataTypes.INTEGER
  },
  created: {
    type: DataTypes.DATE
  },
  modified: {
    type: DataTypes.DATE
  }
}, {
  tableName: 'settings'
});

export default Setting;