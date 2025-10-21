export interface FaqData {
  id: number;
  title: string;
  text: string;
}

export const FaqData: FaqData[] = [
  {
    id: 1,
    title: "Quais débitos consigo consultar?",
    text: "Você pode consultar todos os débitos vinculados ao seu CPF ou CNPJ, incluindo faturas em aberto, parcelas vencidas e pendências negociáveis diretamente no portal.",
  },
  {
    id: 2,
    title: "Posso negociar todas as parcelas?",
    text: "Sim, é possível negociar uma ou mais parcelas em aberto. Durante o processo, você poderá escolher quais débitos deseja incluir e visualizar as opções de pagamento disponíveis.",
  },
  {
    id: 3,
    title: "Consigo informar que já fiz o pagamento?",
    text: "Se o pagamento foi realizado recentemente, ele pode levar até 3 dias úteis para ser identificado automaticamente. Caso o prazo já tenha passado, você pode enviar o comprovante pelo próprio portal ou entrar em contato pelo suporte.",
  },
  {
    id: 4,
    title: "Qual o prazo para a baixa do pagamento?",
    text: "Após o pagamento, o prazo para baixa automática é de até 3 dias úteis. Esse tempo pode variar conforme o banco ou o meio de pagamento utilizado.",
  },
  {
    id: 5,
    title: "Este portal é seguro?",
    text: "Sim. O portal utiliza protocolos de segurança e criptografia de dados (SSL) para proteger suas informações. Além disso, nenhum dado sensível é compartilhado sem a sua autorização.",
  },
];
