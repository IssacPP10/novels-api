const mongoose = require("mongoose");
const Novel = require("../models/Novel");
const Chapter = require("../models/Chapter");
const connectDB = require("../config/database");

const addChapterToNovel = async () => {
  await connectDB();

  try {
    // Buscar la novela existente por su _id
    const novelId = "67673ded5cc220b208ef15f9"; // Asegúrate de que este ID sea correcto
    const novel = await Novel.findById(novelId);

    if (!novel) {
      console.error("La novela no existe en la base de datos.");
      return;
    }

    const chapterContent = `Sabía que anhelaba el mundo exterior cuando supo de su madre sobre su padre fallecido. En ese momento, decidí ir a la Academia Solminati.<br>
        Si mi ser querido quiere hacer realidad su sueño, quiero ayudar. Con esa palabra en mi corazón, prometí firmemente apoyarla.<br>
        Me abrazó con lágrimas y me dijo: "Gracias... me alegro".<br>
        En medio del sueño, sonó la campana que indica el final de la pausa para el almuerzo. Me levanté, solté mi cuerpo y me dirigí al salón de clases para la clase de la tarde. Corté por la fuerza el voto de mi cabeza que ya no puedo cumplir. Mi clase es la décima clase y la clase más baja en el segundo año. Entre ellos, estoy al final, el llamado desertor en el abandono. Cuando entré al salón de clases, me recibió el desprecio y el ridículo de los alrededores.<br>
        "Está aquí de nuevo. El más bajo."<br>
        "Ojalá pudieras simplemente desaparecer."<br>
        "Me pregunto si ya puedes dejar la escuela."<br>
        Tengo miedo de esas voces desalmadas, pero trato de ignorarlas y me siento en mi propio asiento. Cuando llegué a mi asiento, tres escolares se reunieron alrededor de mi asiento.<br>
        "¿Viniste a la clase baja sin ningún propósito?"<br>
        Mars, el gran hombre del medio, habla para intimidarme.<br>
        "Ojalá pudieras renunciar, cosa inútil."<br>
        "Es molesto, porque me verán al mismo nivel que tú."<br>
        Los otros dos que estaban al lado del grandullón también se unieron para maldecir.<br>
        "Bueno, fue abandonado incluso por su amiga de la infancia, la Princesa Pelirroja, ¿no debería dejar de soñar ya?"<br>
        Los alrededores comienzan a reírse de la burla de los tres, pero nadie intenta detenerlo. Al final, los tres no dejaron de insultarme hasta que el maestro entró al aula. Sí, Lisa me dejó en el verano del primer año. Tan pronto como se despidió unilateralmente, se dio la vuelta y se fue. No sé qué pasó, pero desde entonces me mira como si estuviera mirando suciedad.<br>
        "Es porque me engañaste."<br>
        Lisa es una mujer que se llama "Princesa de pelo rojo" debido a su apariencia y habilidad. Por otro lado, mi apariencia es normal y mis notas no son buenas. Estaba saliendo con una novia así, y fui objeto de travesuras, pero el hecho de que ella me dejara de repente, bajó mi evaluación de los alrededores.<br>`;

    // Crear el nuevo capítulo
    const newChapter = new Chapter({
      novel: novel._id,
      title: "Capítulo 1.2: Parte 1",
      content: chapterContent,
      number: 2, // Número del capítulo (incrementar según el último capítulo)
    });

    // Guardar el nuevo capítulo
    const savedChapter = await newChapter.save();

    // Asociar el nuevo capítulo con la novela
    novel.chapters.push(savedChapter._id);
    await novel.save();

    console.log("Capítulo agregado correctamente a la novela.");
  } catch (error) {
    console.error("Error al agregar el capítulo:", error);
  } finally {
    mongoose.connection.close();
  }
};

addChapterToNovel();
