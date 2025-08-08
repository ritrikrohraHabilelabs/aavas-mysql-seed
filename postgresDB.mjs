import { Sequelize } from 'sequelize';

const postgresDB = new Sequelize("postgresql://postgres:07361130@localhost:5432/aavas-mom-gen-ai", {
  dialect: 'postgres',
  logging: false
});

export default postgresDB;