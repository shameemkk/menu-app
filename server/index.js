const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const { menus, menuItems } = require('./Models/Menu.js');

dotenv.config();

const app = express();
const port = process.env.PORT;
const db_url = process.env.DB_URL;

app.use(cors());
app.use(express.json());

try {
    mongoose.connect(db_url)
    console.log('Connected to the database')
} catch (e) {
    console.log('Error connecting to the database')
}

app.post('/addMenu', (req, res) => {
    const { name, description } = req.body;
    if (!name || !description) {
        return res.status(400).json({ error: 'Invalid menu data' });
    }
    menus.create({ name, description })
        .then((result) => res.json({ id: result._id, name: result.name, description: result.description }))
        .catch((err) => res.status(500).json({ error: 'Failed to add menu item' }));
});



app.post('/addMenuItem', (req, res) => {
    const { name, description, price, menu } = req.body;
    if (!name || !description || !price || !menu) {
        return res.status(400).json({ error: 'Invalid menu item data' });
    }
    menuItems.create({ name, description, price, menu })
        .then((result) => res.json({ id: result._id, name: result.name, description: result.description, price: result.price, menu: result.menu }))
        .catch((err) => res.status(500).json({ error: 'Failed to add menu item' }));
});

app.get('/getMenu', (req, res) => {
    menus.find()
        .then((result) => res.json(result))
        .catch((err) => res.status(500).json({ error: 'Failed to fetch menu items' }));
});

app.get('/getMenuItems/:menuId', (req, res) => {
    const menuId = req.params.menuId;
    menuItems.find({ menu: menuId })
        .then((result) => res.json(result))
        .catch((err) => res.status(500).json({ error: 'Failed to fetch menu items' }));
});



const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


