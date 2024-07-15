import oracledb from 'oracledb';

// Configuración de la conexión a la base de datos
const dbConfig = {
    user: 'DBFEST',
    password: '12345',
    connectString: 'localhost/orcl'
};

// Función para obtener todos los usuarios
async function fetchUsers() {
    let connection;

    try {
        connection = await oracledb.getConnection(dbConfig);
        console.log('Connected to Oracle Database successfully.');

        const sql = 'SELECT USER_ID, NAME, EMAIL, PASSWORD FROM users';
        const result = await connection.execute(sql, {}, {
            outFormat: oracledb.OUT_FORMAT_OBJECT
        });

        console.log("Users fetched:", result.rows);
        return result.rows;
    } catch (err) {
        console.error('Error connecting to the database', err);
        throw err;  // Re-throw the error for caller to handle
    } finally {
        if (connection) {
            try {
                await connection.close();
                console.log('Connection closed successfully.');
            } catch (err) {
                console.error('Error closing the connection', err);
            }
        }
    }
}

export default fetchUsers;

