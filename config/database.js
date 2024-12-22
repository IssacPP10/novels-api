const mongoose = require('mongoose');
require('dotenv').config(); // Asegúrate de cargar las variables de entorno

// Función para conectar a la base de datos
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB conectado: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error en la conexión a MongoDB: ${error.message}`);
    process.exit(1); // Salir del proceso si hay un error
  }
};

module.exports = connectDB;
