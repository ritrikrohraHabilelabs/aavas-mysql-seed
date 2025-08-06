import { pool } from './db.js';
import { allTableSchemas } from './schema.js';
import { dummyData } from './seeddata.js';

async function execQueries(queries) {
    for(const sql of queries) {
        await pool.query(sql);
    }
}

async function seedTable(tableName, columns, data) {
    if (data.length === 0) return;
    const ques = '(' + columns.map(()=>'?' ).join(',') + ')';
    const sql = `INSERT INTO ${tableName} (${columns.join(',')}) VALUES ${data.map(()=>ques).join(',')}`;
    const flat = data.flat();
    await pool.query(`DELETE FROM ${tableName}`); // clean before inserting
    await pool.query(sql, flat);
}

// Define the insert meta for each table (column names and data source)
const seedPlan = [
  { table: 'banks', columns: ['id','slug','name','head_office_city','img_path','status','created','modified'],  dummyData.banks },
  { table: 'branches', columns:['id','slug','bank_id','name','address','status','created','modified'],  dummyData.branches },
  // ... Same for all the other tables, referencing dummyData properties
  // Example: { table: 'contacts', columns: [...],  dummyData.contacts }
];

async function main() {
    console.log('Creating schema...');
    await execQueries(allTableSchemas);
    console.log('Seeding data...');
    for(const s of seedPlan) {
        await seedTable(s.table, s.columns, s.data);
        console.log(`${s.table} seeded (${s.data.length} rows)`);
    }
    await pool.end();
    console.log('-- All done! --');
}

main().catch(e => {
    console.error(e);
    process.exit(1);
});
