const mongoose = require("mongoose");
const Novel = require("../models/Novel");
const Chapter = require("../models/Chapter");
const connectDB = require("../config/database");

const seedData = async () => {
  await connectDB();

  try {
    // Crear la novela
    const novel = new Novel({
      title: 'The Extras Academy Survival Guide',
      genre: "Fantasy",
      description:
        "Terminé transmigrando como un extra de tercera categoría en un juego que me gusta, pero lo peor de todo es que este personaje ya ha caído y ha sido repudiado. No tengo ambiciones. Solo quiero graduarme, pero el mundo no me lo permite.",
    });

    // Guardar la novela
    const savedNovel = await novel.save();

    const chapterContent = `Proximamente<br>`;

    // Crear el capítulo y asociar la novela con él
    const chapter = new Chapter({
      novel: savedNovel._id, // Ahora el campo novel tiene la referencia correcta
      title: "Capítulo 1: Prologo",
      content: chapterContent,
      number: 1,
    });

    // Guardar el capítulo
    const savedChapter = await chapter.save();

    // Asociar el capítulo a la novela
    savedNovel.chapters.push(savedChapter._id);
    await savedNovel.save();

    console.log("Datos iniciales insertados correctamente.");
  } catch (error) {
    console.error("Error al insertar los datos iniciales:", error);
  } finally {
    mongoose.connection.close();
  }
};

seedData();
