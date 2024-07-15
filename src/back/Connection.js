import oracledb from 'oracledb';

// Configuración de la conexión a la base de datos
const dbConfig = {
    user: 'DBFEST',
    password: '12345',
    connectString: 'localhost/orcl'
};

// Función para obtener todos los usuarios
export async function fetchUsers(id) {
    let connection;

    try {
        connection = await oracledb.getConnection(dbConfig);
        console.log('Connected to Oracle Database successfully.');

        // Utiliza el marcador de posición :id para Oracle en lugar de ?
        const sql = 'SELECT USER_ID, NAME, EMAIL, PASSWORD FROM users WHERE USER_ID = :id';

        // Asegúrate de que los parámetros sean pasados correctamente como un array o objeto
        const result = await connection.execute(sql, [id], { // Pasa el ID como un array
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
export async function insertUser(user_id, name, email, password) {
    let connection;

    try {
        connection = await oracledb.getConnection(dbConfig);
        console.log('Connected to Oracle Database successfully.');

        const sql = `
            INSERT INTO users (USER_ID, NAME, EMAIL, PASSWORD) VALUES (:user_id, :name, :email, :password)
        `;
        const result = await connection.execute(sql, {
            user_id,
            name,
            email,
            password
        }, { autoCommit: true });

        console.log("Rows inserted:", result.rowsAffected);  // Debería mostrar '1' si se insertó un registro
        return result;
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

