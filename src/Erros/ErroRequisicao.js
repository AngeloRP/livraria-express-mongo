import ErroBase from "./ErroBase.js";

class ErroRequisicao extends ErroBase {
  constructor (mensagem = "Um ou mais dados fornecidos estão incorretos") {
    super (mensagem, 400); // neste caso o super recebe os paramentros criados pelo ERroBase, depois personalizo conforme minha preferencia.
  }
}

export default ErroRequisicao;