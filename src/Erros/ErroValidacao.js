import ErroRequisicao from "./ErroRequisicao.js";

class ErroValidacao extends ErroRequisicao {
  constructor (erro) {
    const mensagemErro = Object.values(erro.errors) // acessa o obj de erro e armazena na variavel. Para acessar o erro o constructor recebe como parametro o erro.
      .map((erro => erro.message))
      .join("; ");
    super(`Os seguintes erros foram encontrados: ${mensagemErro}`);
  }
}

export default ErroValidacao;
