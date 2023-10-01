import mongoose, { Schema, mongo } from "mongoose";
import { autorSchema } from "./Autor.js";

const livroSchema = new mongoose.Schema ({
    id: { type: mongoose.Schema.Types.ObjectId }, // torna o id unico
    titulo: { type: String, required: true }, // obrigado adicionar titulo
    editora: { type: String },
    preco: { type: Number },
    paginas: { type: Number },
    autor: autorSchema
}, { versionKey: false}); // tipo avançado de config.

const livro = mongoose.model("livros", livroSchema); //model livros, se encontra no atlas, e livroSchema que esta acima.


export default livro; // exportei para utilizar no controle.