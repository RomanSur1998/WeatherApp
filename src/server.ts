import express from "express";
import setupProxy from "./setupProxy";

const app = express();

// ... другие настройки вашего сервера ...

// Настройка прокси-сервера
setupProxy(app);

// ... другие middleware и маршруты вашего сервера ...

// Запуск сервера
app.listen(3000, () => {
  console.log("Сервер запущен на порту 3000");
});
