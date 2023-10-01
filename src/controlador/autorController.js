import { autor } from "../models/Autor.js"; // importei o modelo para usar na ListaLivros.

class AutorController {  

    static async ListarAutores (req, res) { 
        try {
            const listaAutores = await autor.find({});
            res.status(200).json(listaAutores);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Erro na requisição.` });
        }
    };

    static async ListarAutorPorId (req, res) { 
        try {
            const id = req.params.id;  // Guarda o id enviado na requisição;
            const autorEncontrado = await autor.findById(id); // Busca o livro;
            res.status(200).json(autorEncontrado); // Mostra a resposta;
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Erro ao encontrar o livro.` });
        }
    };    

    static async CadastrarAutor (req, res) {
        try {                               // serve para manejo de erros e sucessos.
            const novoAutor =  await autor.create(req.body); //mongoose cria o livro baseado no model.
            res.status(201).json({ message: "Autor criado com sucesso", Autor: novoAutor }); // resposta 201, json com msg de sucesso e mostra o novoLivro, conforme descrito no model.
        } catch (erro) { // resposta http status 500 se refere a erros internos.
            res.status(500).json( { message:`${erro} - Erro ao cadastrar novo livro.`} );
        }
    }

    static async atualizarAutor (req, res) { 
        try {
            const id = req.params.id;  // Guarda o id enviado na requisição;
            await autor.findByIdAndUpdate(id, req.body); // Busca o livro pelo id e atualiza conforme segundo parametro.   Mongosse faz isso.
            res.status(200).json({ message: "Autor atualizado com sucesso" }); // Mostra a resposta;
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Erro ao encontrar o autor.` });
        }
    }
    static async deletarAutor (req, res) { 
        const id = req.params.id;  // Guarda o id enviado na requisição;
        try {
            await autor.findByIdAndDelete(id); // Busca o livro pelo id e deleta conforme segundo parametro.   Mongosse faz isso.
            res.status(200).json({ message: "Autor exluido com sucesso" }); // Mostra a resposta;
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Erro ao deletar o Autor.` });
        }
    }
};

export default AutorController;
