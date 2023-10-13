import mongoose from "mongoose";
import { autorSchema } from "./Autor.js";

const livroSchema = new mongoose.Schema ({
  id: { type: mongoose.Schema.Types.ObjectId }, // torna o id unico
  titulo: {
    type: String, 
    required: [true, "o Titulo do livro é obrigatório!"]
  }, // obrigado adicionar titulo
  editora: {
    type: String,
    required: [true, "A editora é obrigatória"],
    enum: ["classicos"] //permite que você restrinja os valores possíveis de um campo a um conjunto específico de valores.
  },
  preco: {
    type: Number,
    min: 1
  },
  paginas: {
    type: Number,
    min: 10,
    max: 5000
  },
  autor: autorSchema
},
{ versionKey: false}); // tipo avançado de config.

const livro = mongoose.model("livros", livroSchema); //model livros, se encontra no atlas, e livroSchema que esta acima.


export default livro; // exportei para utilizar no controle.