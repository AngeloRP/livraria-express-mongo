import express from "express";
import conectaNaDataBase from "./config/dbConnect.js";
import rotas from "./rotas/index.js";

const conexao = await conectaNaDataBase();

conexao.on("error", (erro) => {
    console.error("Erro de conexão", erro);
});

conexao.once("open", () => {
    console.log("conexao com o banco de dados realizado com sucesso!!!");
});

const app = express();
rotas(app);

export default app;