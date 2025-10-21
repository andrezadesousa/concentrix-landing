# Projeto Web - Portal de Experiência

Este é um projeto front-end desenvolvido em React, que simula um portal interativo com login via CPF/CNPJ e validação de idade. 

---

## 🚀 Funcionalidades

- Formulário de login com seleção de **Pessoa Física (CPF)** ou **Pessoa Jurídica (CNPJ)**.  
- Validação de CPF/CNPJ e **data de nascimento**.  
- Verificação de idade mínima (18 anos).  
- Alertas de sucesso e erros com mensagens claras:  
  - CPF/CNPJ inválido  
  - Data de nascimento inválida  
  - Idade menor que 18 anos  
- Redirecionamento automático após login bem-sucedido.  
- Layout responsivo e moderno, seguindo o design fornecido.  
- Componentes adicionais: Home, Serviços Personalizados, FAQ, Start Now, Footer.  

---

## 🛠 Tecnologias Utilizadas

- [React](https://reactjs.org/)  
- [TypeScript](https://www.typescriptlang.org/)  
- [CSS3 / Globals.css](./src/globals.css)  
- Estrutura de componentes reutilizáveis (Hero, Alert, Home, Faq, etc.)

---

## 💻 Como Executar o Projeto

Siga os passos abaixo para rodar o projeto localmente:

1. **Clone o repositório**  
```bash
git clone https://github.com/andrezadesousa/concentrix-landing
```
2. **Entre na pasta do projeto**
```bash
cd concentrix-landing
```
3. **Instale as dependências**
```bash
npm install
# ou
yarn install
```
4. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
```
5. **Inicie o servidor de desenvolvimento**
```bash
├── src/
│   ├── components/       # Componentes React reutilizáveis
│   │   ├── Hero.tsx
│   │   ├── Alert.tsx
│   │   ├── Home.tsx
│   │   ├── Faq.tsx
│   │   └── ...
│   ├── assets/           # Imagens e ícones
│   ├── App.tsx           # Componente principal
│   └── main.tsx       
│   └── App.css       
├── package.json
├── tsconfig.json
└── README.md
```
📌 Observações
- O projeto é front-end apenas, com redirecionamento simulado para https://andreza-sousa.web.app/ após login válido.
- A validação de CPF/CNPJ e idade é feita no cliente.

Feito com ❤️ por Andreza de Sousa
