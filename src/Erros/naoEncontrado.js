import ErroBase from "./ErroBase.js";

class naoEncontrado extends ErroBase {
  constructor (mensagem = "Pagina nao encontrada") {
    super(mensagem, 404);
  }
}

export default naoEncontrado;