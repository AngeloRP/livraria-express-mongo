import naoEncontrado from "../Erros/naoEncontrado.js";
import { autor } from "../models/Autor.js"; // importei o modelo para usar na ListaLivros.
class AutorController {  

  static async ListarAutores (req, res, next)  { 
    try {
      const listaAutores = await autor.find({});
      res.status(200).json(listaAutores);
    } catch (erro) {
      next(erro);
    }
  }

  static async ListarAutorPorId (req, res, next) { 
    try {
      const id = req.params.id;  // Guarda o id enviado na requisição;
      const autorEncontrado = await autor.findById(id); // Busca o livro;
      if (autorEncontrado !== null) {
        res.status(200).json(autorEncontrado); // Mostra a resposta;
      } else {
        next(new naoEncontrado("ID do autor não encontrado"));
      }
    } catch (erro) {
      next(erro);
    }
  }    

  static async CadastrarAutor (req, res, next) {
    try {                               // serve para manejo de erros e sucessos.
      const novoAutor =  await autor.create(req.body); //mongoose cria o livro baseado no model.
      res.status(201).json({ message: "Autor criado com sucesso", Autor: novoAutor }); // resposta 201, json com msg de sucesso e mostra o novoLivro, conforme descrito no model.
    } catch (erro) { // resposta http status 500 se refere a erros internos.
      next(erro);
    }
  }

  static async atualizarAutor (req, res, next) { 
    try {
      const id = req.params.id;  // Guarda o id enviado na requisição;
      const atualizaAutor = await autor.findByIdAndUpdate(id, req.body); // Busca o livro pelo id e atualiza conforme segundo parametro.   Mongosse faz isso.
      
      if (atualizaAutor !== null) {
        res.status(200).json({ message: "Autor atualizado com sucesso" }); // Mostra a resposta;
      } else {
        next(new naoEncontrado("Erro ao atualizar autor"));
      }
    } catch (erro) {
      next(erro);
    }
  }

  static async deletarAutor (req, res, next) { 
    const id = req.params.id;  // Guarda o id enviado na requisição;
    try {
      const deletaAutor = await autor.findByIdAndDelete(id); // Busca o livro pelo id e deleta conforme segundo parametro.   Mongosse faz isso.
      if (deletaAutor !== null) {
        res.status(200).json({ message: "Autor exluido com sucesso" }); // Mostra a resposta;
      } else {
        next(new naoEncontrado("erro ao deletar autor"));
      }
    } catch (erro) {
      next(erro);
    }
  }
}

export default AutorController;
