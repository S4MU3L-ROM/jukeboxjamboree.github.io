import express from 'express';
import fetchUsers from './src/back/Connection.js'; // Asegúrate de usar la ruta correcta

const app = express();
app.use(express.json());

app.get('/users', async (req, res) => {
    try {
        const users = await fetchUsers();
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send({ message: "Failed to fetch users", error: error.message });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
