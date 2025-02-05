import express from "express";
import wordOfTheDayRoute from "./app/routes/wordOfTheDay.route.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
const corsOptions = {
  origin: "http://localhost:5173", // Cambia esta URL a la del frontend que esté permitido
  methods: ["GET", "POST", "PUT", "DELETE"], // Métodos HTTP permitidos
  credentials: true, // Para permitir el envío de cookies
};

app.use(cors(corsOptions));

app.use("/wordOfTheDay", wordOfTheDayRoute);

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

export default app;
