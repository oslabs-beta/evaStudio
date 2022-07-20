const { Pool } = require('pg');

const PG_URI = 'postgres://admin:secret@localhost:5432/mainDB'; // if this URI doesn't work, convert "localhost" to "postgres" in string

const pool = new Pool({
  connectionString: PG_URI
});


module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
}