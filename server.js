import express from 'express';
import { fetchUsers, insertUser } from './src/back/Connection.js'; // Asegúrate de que la ruta es correcta

const app = express();
app.use(express.json()); // Middleware para parsear JSON entrante

app.get('/users', async (req, res) => {
    try {
        const id = req.params.id; // Obtener el ID del usuario desde los parámetros de la URL
        const users = await fetchUsers(id); // Pasar el ID a la función fetchUsers

        if (users.length === 0) {
            res.status(404).json({ message: "User not found" }); // Devuelve 404 si no se encuentra el usuario
        } else {
            res.status(200).json(users); // Devuelve los datos del usuario si se encuentra
        }
    } catch (error) {
        console.error("Error fetching user: ", error);
        res.status(500).json({ message: "Failed to fetch user", error: error.message });
    }
});


app.post('/add', async (req, res) => {
    try {
        const { id_user, name, email, password } = req.body;
        if (!name || !email || !password || !id_user) {
            return res.status(400).json({ message: "Missing fields" }); // Verificación de que todos los campos necesarios estén presentes
        }
        const result = await insertUser(id_user, name, email, password);
        res.status(201).json({ message: "User inserted successfully", rowsAffected: result.rowsAffected });
    } catch (error) {
        console.error("Error inserting user: ", error);
        res.status(500).json({ message: "Failed to insert user", error: error.message });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
