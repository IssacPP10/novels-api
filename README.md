# 📚 Novelas API

Una API RESTful diseñada para gestionar novelas y sus capítulos. Esta API permite realizar traer información de novelas y capítulos, con datos almacenados en una base de datos MongoDB. 

---

## 🌐 URL de la API

La API está alojada en Render y puede ser accedida desde:

```
https://novels-api.onrender.com
```

---

## ✨ Tecnologías utilizadas

- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **Express.js**: Framework para construir aplicaciones web y APIs.
- **MongoDB**: Base de datos NoSQL utilizada para almacenar las novelas y capítulos.
- **Mongoose**: Librería de modelado para MongoDB.
- **Render**: Plataforma utilizada para alojar la API.
- **Thunder Client**: Herramienta para pruebas de endpoints (opcional).
---

## 🛠️ Contribuir al proyecto

Si deseas contribuir al proyecto, sigue estos pasos:

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/novelas-api.git
cd novelas-api
```

### 2️⃣ Instalar dependencias

Asegúrate de tener Node.js instalado. Luego, ejecuta:

```bash
npm install
```

### 3️⃣ Configurar las variables de entorno

Crea un archivo `.env` en la raíz del proyecto y agrega las siguientes variables:

```
MONGO_URI=mongodb+srv://<usuario>:<contraseña>@cluster0.mongodb.net/<nombre_de_base_de_datos>?retryWrites=true&w=majority
PORT=3000
```

### 4️⃣ Ejecutar el proyecto en local

Inicia el servidor con el siguiente comando:

```bash
npm start
```

La API estará disponible en `http://localhost:3000`.

### 5️⃣ Realizar pruebas

Utiliza herramientas como **Thunder Client**, **Postman** o cualquier cliente HTTP para probar los endpoints. Asegúrate de que las rutas funcionen correctamente.

### 6️⃣ Realizar un pull request

1. Crea una rama nueva para tus cambios:

    ```bash
    git checkout -b feature/nueva-funcionalidad
    ```

2. Realiza tus cambios y haz commit:

    ```bash
    git add .
    git commit -m "Descripción de los cambios realizados"
    ```

3. Sube tu rama al repositorio:

    ```bash
    git push origin feature/nueva-funcionalidad
    ```

4. Abre un pull request en GitHub para que tus cambios sean revisados e integrados.

---

## 🖋️ Notas adicionales

Si encuentras algún problema o tienes preguntas sobre el proyecto, no dudes en abrir un **Issue** en el repositorio.

¡Gracias por tu interés en contribuir a este proyecto! 💻✨
