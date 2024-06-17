import express from "express";
const app = express();
app.use(express.static("public"));
app.get("/", function (request, response) {
  response.send("<h2>Hello, World!</h2>");
});
app.get("/about", function (request, response) {
  response.send("<h2>Это простое приложение на Express.js</h2>");
});
app.get("*", function (request, response) {
  response.send("<h2>Страница не найдена</h2>");
});
app.listen(3000);
