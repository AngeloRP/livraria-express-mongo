import express from "express";
import conectaNaDataBase from "./config/dbConnect.js";
import routes from "./rotas/index.js";
import manipuladorDeErros from "./middleware/manipuladorDeErros.js";
import manipulador404 from "./middleware/manipulador404.js";

const conexao = await conectaNaDataBase();
conexao.on("error", (erro) => {
  console.error("Erro de conexão", erro);
});
conexao.once("open", () => {
  console.log("conexao com o banco de dados realizado com sucesso!!!");
});

const app = express();

routes(app);

app.use(manipulador404); // middleware após o routes(app) para ser executado apenas se nenhuma rota for executada;
app.use(manipuladorDeErros); // middleware para manipular erros.

export default app;