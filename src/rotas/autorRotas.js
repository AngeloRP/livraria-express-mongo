import express from "express"; // o express gerencia as  rotas.
import AutorController  from "../controlador/autorController.js";  // controlador do livro.

const routes = express.Router();

routes.get("/autores", AutorController.ListarAutores);
routes.get("/autores/:id", AutorController.ListarAutorPorId);
routes.post("/autores", AutorController.CadastrarAutor);
routes.put("/autores/:id", AutorController.atualizarAutor);
routes.delete("/autores/:id", AutorController.deletarAutor);


export default routes;