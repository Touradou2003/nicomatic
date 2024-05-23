const express = require('express');
const formRoutes =require("./routes/formRoutes")
const dotenv = require('dotenv');
const cors = require("cors");



dotenv.config();

const app = express();
app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
    })
);
const PORT = process.env.PORT || 5000;

// Middleware pour analyser les requêtes JSON
app.use(express.json());
app.use("/api", formRoutes);

// Connexion à MongoDB
/*mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error(err);
});*/

// Route de base
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


