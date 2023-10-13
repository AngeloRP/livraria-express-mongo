import mongoose from "mongoose";
import ErroBase from "../Erros/ErroBase.js";
import ErroRequisicao from "../Erros/ErroRequisicao.js";
import ErroValidacao from "../Erros/ErroValidacao.js";
import naoEncontrado from "../Erros/naoEncontrado.js";

// eslint-disable-next-line no-unused-vars
function manipuladorDeErros (erro, req, res, next) { // middleware para manipular erros. 4 paramentros.

  if (erro instanceof mongoose.Error.CastError){// esta relacionado ao id digitado.
    console.log("Erro de requisição: " + res);
    new ErroRequisicao().enviarResposta(res);
  } else if (erro instanceof mongoose.Error.ValidationError) { // esta propriedade está ligado quando vc tenta salvar um dados qu nao corresponde ao Schema.
    console.log("Erro de validação: " + res);
    new ErroValidacao(erro).enviarResposta(res);
  } else if (erro instanceof naoEncontrado) {
    erro.enviarResposta(res);
  } else {
    console.log("Erro interno do servidor: " + res);
    new ErroBase().enviarResposta(res);
  }
}

export default manipuladorDeErros;

