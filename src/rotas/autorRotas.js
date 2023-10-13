import express from "express"; // o express gerencia as  rotas.
import AutorController  from "../controlador/autorController.js";  // controlador do livro.

const routes = express.Router();

routes
  .get("/autores", AutorController.ListarAutores)
  .get("/autores/:id", AutorController.ListarAutorPorId)
  .post("/autores", AutorController.CadastrarAutor)
  .put("/autores/:id", AutorController.atualizarAutor)
  .delete("/autores/:id", AutorController.deletarAutor);


export default routes;