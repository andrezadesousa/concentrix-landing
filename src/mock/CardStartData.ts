import Login from "../assets/login.png";
import Token from "../assets/token.png";
import Contract from "../assets/contract.png";
import Done from "../assets/check.png";

export interface CardStartData {
  id: number;
  number: string;
  title: string;
  text: string;
  img: string;
}

export const cardStartData: CardStartData[] = [
  {
    id: 1,
    number: "1",
    title: "Login",
    text: "Insira seus dados de acesso",
    img: Login,
  },
  {
    id: 2,
    number: "2",
    title: "Token",
    text: "Insira o código recebido em seu celular ou e-mail cadastrado.",
    img: Token,
  },
  {
    id: 3,
    number: "3",
    title: "Contrato",
    text: "Selecione o contrato que gostaria de negociar.",
    img: Contract,
  },
  {
    id: 4,
    number: "4",
    title: "Pronto",
    text: "Agora é só escolher a forma de pagamento.",
    img: Done,
  },
];
