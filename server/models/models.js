const { Pool } = require('pg');
const pg_URI = "postgres://wvsrfkjo:zI0MPKyGWoJ1eUJPbMHRLG_XNctyek14@salt.db.elephantsql.com:5432/wvsrfkjo"

const pool = new Pool({
    connectionString: pg_URI
})

module.exports = { query: (text, params, callback)=>{
    console.log("executed query", text);
    return pool.query(text, params, callback);
} }