import naoEncontrado from "../Erros/naoEncontrado.js";
import livro from "../models/Livro.js"; // importei o modelo para usar na ListaLivros.


class LivroController {  

  static ListarLivros = async (req, res, next) => {
    try {
      const livrosResultado = await livro.find();
      //.populate("autor")// é usado para preencher as informações do autor relacionado a cada livro. Isso é especialmente útil quando você tem uma referência ao autor nos documentos de livro.
      //.exec();
      res.status(200).json(livrosResultado);
    } catch (erro) {
      next(erro);
    }
  };

  static async ListarLivroPorId (req, res, next) { 
    try {
      const id = req.params.id;  // Guarda o id enviado na requisição;
      const livroEncontrado = await livro.findById(id); // Busca o livro;
      if (livroEncontrado !== null) {
        res.status(200).json(livroEncontrado); // Mostra a resposta;
      } else {
        next(new naoEncontrado("este Id não corresponde a nenhum livro"));
      }
    } catch (erro) {
      next(erro);
    }
  }    

  static async CadastrarLivro (req, res, next) {
    try {                              
      const novoLivro = await livro.create(req.body);
      res.status(201).json({ "Livro": novoLivro }); // resposta 201, json com msg de sucesso e mostra o novoLivro, conforme descrito no model.
    } catch (erro) { // resposta http status 500 se refere a erros internos.
      next(erro);
    }
  }

  static async atualizarLivro (req, res, next) { 
    try {
      const id = req.params.id;  // Guarda o id enviado na requisição;
      const atualizaLivro = await livro.findByIdAndUpdate(id, req.body); // Busca o livro pelo id e atualiza conforme segundo parametro.   Mongosse faz isso.
      if (atualizaLivro !== null) {
        res.status(200).json({ message: "Livro atualizado com sucesso", Livro: atualizaLivro}); // Mostra a resposta;
      } else {
        next(new naoEncontrado("Erro ao atualizar livro"));
      }
    } catch (erro) {
      next(erro);
    }
  }
  static async deletarLivro (req, res, next) { 
    try {
      const id = req.params.id;  // Guarda o id enviado na requisição;
      const deletaLivro = await livro.findByIdAndDelete(id); // Busca o livro pelo id e deleta conforme segundo parametro.   Mongosse faz isso.
      if (deletaLivro !== null) {
        res.status(200).json({ message: "Livro exluido com sucesso" }); // Mostra a resposta;
      } else {
        next(new naoEncontrado("erro ao deletar livro"));
      }
    } catch (erro) {
      next(erro);
    }
  }
  static async listarLivroPorEditora (req, res, next) {
    const editora = req.query.editora;
    try {
      const livrosPorEditora = await livro.find({ editora: editora });

      res.status(200).json({livrosPorEditora});
    } catch (erro) {
      next(erro);
    }
  }
}

export default LivroController;
