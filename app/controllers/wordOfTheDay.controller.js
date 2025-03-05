import { mockWordOfTheDay } from "../mockups/wordOfTheDay.mock.js"; // Si usas mock

export const getWordOfTheDay = async (req, res) => {
  const getCurrentWordIndex = () => {
    const today = new Date();
    const startDate = new Date(2024, 0, 1); // Fecha fija (puedes cambiarla)
    const diffDays = Math.floor((today - startDate) / (1000 * 60 * 60 * 24)); // Diferencia en días
    return diffDays % mockWordOfTheDay.length; // Siempre dentro del rango de palabras
  };
  try {
    const wordIndex = getCurrentWordIndex();
    const wordOfTheDay = mockWordOfTheDay[wordIndex];
    res.json({ word: wordOfTheDay });
  } catch (error) {
    console.error("Error al obtener la palabra del día:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};
// -----------------------------------------------------------------------------
let currentIndex = 0;

const updateWord = () => {
  currentIndex = (currentIndex + 1) % mockWordOfTheDay.length;
};
updateWord();
setInterval(updateWord, 1000 * 60 * 30); // Actualiza cada 30 minutos

export const wordforHalfHour = async (req, res) => {
  try {
    const wordforHalfHour = mockWordOfTheDay[currentIndex];
    res.json({ word: wordforHalfHour });
  } catch (error) {
    console.error("Error al obtener la palabra del día:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};
