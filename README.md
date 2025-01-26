# Menu Application

This is a menu application built with React for the frontend and Express.js for the backend. It allows users to view different menu items and add new menu items through an admin interface.

## Features

- View different menu categories and items
- Add new menu items through an admin interface
- Responsive design with Tailwind CSS
- Backend API with Express.js and MongoDB

## Technologies Used

- Frontend: React, Tailwind CSS, Axios
- Backend: Express.js, MongoDB, Mongoose
- Other: dotenv, cors

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/menu-app.git
   cd menu-app
   ```

2. Install dependencies for the client:
   ```bash
   cd client
   npm install
   ```

3. Install dependencies for the server:
   ```bash
   cd ../server
   npm install
   ```

4. Create a `.env` file in the server directory and add your MongoDB connection string:
   ```env
   DB_URL=your_mongodb_connection_string
   PORT=3001
   ```

### Running the Application

1. Start the server:
   ```bash
   cd server
   npm start
   ```

2. Start the client:
   ```bash
   cd ../client
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000`

## API Endpoints

- `POST /addMenu`: Add a new menu category
- `POST /addMenuItem`: Add a new menu item
- `GET /getMenu`: Get all menu categories
- `GET /getMenuItems/:menuId`: Get all menu items for a specific category

## License

This project is licensed under the MIT License.
