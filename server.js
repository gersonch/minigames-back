import express from "express";
import wordOfTheDayRoute from "./app/routes/wordOfTheDay.route.js";
import cors from "cors";

// const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

const corsOptions = {
  origin: ["https://minigames-beta.vercel.app/"], // Cambia esta URL a la del frontend que esté permitido
  methods: ["GET", "POST", "PUT", "DELETE"], // Métodos HTTP permitidos
  credentials: true, // Habilita el intercambio de cookies entre dominios
};

app.use(cors(corsOptions));

app.use("/wordOfTheDay", wordOfTheDayRoute);

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

export default app;
