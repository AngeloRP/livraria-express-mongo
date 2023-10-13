import express from "express";
import livros from "./livroRotas.js";
import autores from "./autorRotas.js";

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("Curso de node.js"));

  app.use(
    express.json(),
    livros,
    autores
  );                   // usado para criar middleweare na instancia do express.
};

export default routes;

// middleware, pequenos programas que o express consegue capturar as requisições e respostas e manejar elas.
