import express from "express"; // o express gerencia as  rotas.
import LivroController  from "../controlador/livrosController.js";  // controlador do livro.

const routes = express.Router();

routes
  .get("/livros", LivroController.ListarLivros)
  .get("/livros/busca", LivroController.listarLivroPorEditora)
  .get("/livros/:id", LivroController.ListarLivroPorId)
  .post("/livros", LivroController.CadastrarLivro)
  .put("/livros/:id", LivroController.atualizarLivro)
  .delete("/livros/:id", LivroController.deletarLivro); //  :id refere-se a informação variavel,


export default routes;