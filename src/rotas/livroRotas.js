import express from "express"; // o express gerencia as  rotas.
import LivroController  from "../controlador/livrosController.js";  // controlador do livro.

const routes = express.Router();

routes.get("/livros", LivroController.ListarLivros);
routes.get("/livros/busca", LivroController.listarLivroPorEditora);
routes.get("/livros/:id", LivroController.ListarLivroPorId);
routes.post("/livros", LivroController.CadastrarLivro);
routes.put("/livros/:id", LivroController.atualizarLivro);
routes.delete("/livros/:id", LivroController.deletarLivro); //  :id refere-se a informação variavel,


export default routes;