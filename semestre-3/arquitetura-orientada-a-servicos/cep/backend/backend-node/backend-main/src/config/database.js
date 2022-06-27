const pg = require('pg');


const getConnection = () => {
  if (global.connection && global.connection.state !== 'disconnected') {
    return global.connection;
  };
  
  const client = new pg.Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
  });

  client.connect();

  global.connection = client;
  return client;
}

const structure = async () => {{
  const connection = getConnection();

  const sql = `CREATE TABLE IF NO EXISTS tb_user
               (id bigint, 
                age character varying(255)
                cep character varying(255)
                name character varying(255)
                number character varying(255)
                PRIMARY KEY(id))`;

  return await connection.query(sql);
}}

module.exports = { getConnection, structure };
