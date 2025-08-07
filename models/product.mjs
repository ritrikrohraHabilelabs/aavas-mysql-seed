import { DataTypes } from 'sequelize';
import { sequelize } from '../config.mjs';

const Product = sequelize.define('Product', {
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
  tableName: 'products'
});

export default Product;