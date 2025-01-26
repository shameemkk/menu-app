const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    }
    
  });


  const MenuItemSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    menu: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Menu',
      required: true,
    },
  }, {
    timestamps: true,
  });



const menus = mongoose.model('Menu', MenuSchema);
const menuItems = mongoose.model('MenuItems', MenuItemSchema);

module.exports = { menus, menuItems };

