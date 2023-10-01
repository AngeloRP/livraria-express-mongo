import livro from "../models/Livro.js"; // importei o modelo para usar na ListaLivros.
import { autor } from "../models/Autor.js";

class LivroController {  

    static async ListarLivros (req, res) { 
        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Erro na requisição.` });
        }
    };

    static async ListarLivroPorId (req, res) { 
        try {
            const id = req.params.id;  // Guarda o id enviado na requisição;
            const livroEncontrado = await livro.findById(id); // Busca o livro;
            res.status(200).json(livroEncontrado); // Mostra a resposta;
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Erro ao encontrar o livro.` });
        }
    };    

    static async CadastrarLivro (req, res) {
        const novoLivro = req.body;
        try {                               // serve para manejo de erros e sucessos.
            const autorEncontrado = await autor.findById(novoLivro.autor); // encontra o autor baseado na req.body;
            const livroCompleto = {...novoLivro, autor: { ...autorEncontrado._doc }}; // união do livro com autor;
            const livroCriado = await livro.create(livroCompleto); // cria o livro.
            res.status(201).json({ message: "Livro criado com sucesso", Livro: livroCriado }); // resposta 201, json com msg de sucesso e mostra o novoLivro, conforme descrito no model.

        } catch (erro) { // resposta http status 500 se refere a erros internos.
            res.status(500).json( { message:`${erro.message} - Erro ao cadastrar novo livro.`} );
        }
    }

    static async atualizarLivro (req, res) { 
        try {
            const id = req.params.id;  // Guarda o id enviado na requisição;
            await livro.findByIdAndUpdate(id, req.body); // Busca o livro pelo id e atualiza conforme segundo parametro.   Mongosse faz isso.
            res.status(200).json({ message: "Livro atualizado com sucesso" }); // Mostra a resposta;
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Erro ao encontrar o livro.` });
        }
    }
    static async deletarLivro (req, res) { 
        try {
            const id = req.params.id;  // Guarda o id enviado na requisição;
            await livro.findByIdAndDelete(id); // Busca o livro pelo id e deleta conforme segundo parametro.   Mongosse faz isso.
            res.status(200).json({ message: "Livro exluido com sucesso" }); // Mostra a resposta;
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Erro ao deletar o livro.` });
        }
    }
    static async listarLivroPorEditora (req, res) {
        const editora = req.query.editora;
        try {
            const livrosPorEditora = await livro.find({ editora: editora });
            res.status(200).json(livrosPorEditora);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Erro ao buscar editora.` });
        }
    }
};

export default LivroController;
