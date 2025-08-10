# Loja de Quadrinhos Marvel

## **Descrição do Projeto**

Este projeto é a solução para o desafio de desenvolvedor front-end da NeoApp. Trata-se de uma loja de quadrinhos virtual da Marvel, moderna e responsiva, desenvolvida para proporcionar uma experiência de usuário simples e agradável. O website permite a navegação por um catálogo de HQs, visualização individual dos produtos e um sistema de carrinho de compras com a possibilidade de aplicar cupons de desconto.

---

## **Tecnologias Utilizadas**

O projeto foi construído utilizando as seguintes tecnologias:

- **Next.js**
- **ContextAPI**
- **Styled Components**
- **Cypress**
- **React Icons**
- **Docker**

---

## **Funcionalidades**

### **Essenciais**

Utilização de ReactJs ou NextJs **✅**

Estilização feita com Styled Components **✅**

Realizar teste E2E com Cypress nos fluxos que achar necessário **✅**

Que a UI seja autoral do participante, esteticamente bonita e simples de usar **✅**

Layout responsivo **✅**

Ver o website rodando em algum host estático (Heroku, Netlify, Vercel, Github
Pages, etc) **✅**

### Bônus

10% de Quadrinhos Raros **✅**

Sistema de Cupons **✅**

HTML Semântico **✅**

Animações em CSS **✅**

Utilização de Redux Toolkit para gerenciamento de estado global ❌

Utilização de Docker na conteinerização da aplicação **🟡** (Tive problemas com o componente Image do next, a conteinerização funcionou, porém as imagens não funcionam)

---

## **Estrutura e Arquitetura**

### **Como pensei o projeto**

- **Next.js e SSR**: Decidi utilizar o Next.js com server actions para o fetch da api.
- **ContextAPI**: Optei pelo ContextAPI por ter mais experiência e não ter muita familiaridade com o Redux Toolkit, porém com o ContextAPI foi possível gerenciar os estados de Paginação, os Quadrinhos e o do Carrinho.
- **Testes E2E com Cypress**: Eu escrevi os testes para as funcionalidades de listagem, paginação e carrinho à medida que as desenvolvia.

---

## **Instalação e Execução**

Siga os passos abaixo para rodar a aplicação localmente.

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm (ou yarn)

### 1. Clonar o repositório

`git clone` 

### 2. Instalar as dependências

`npm install`

### 3. Configurar as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com as suas chaves da API da Marvel.

### 4. Rodar o projeto (Modo de Desenvolvimento)

`npm run dev`

Acesse `http://localhost:3000` no seu navegador.

### 5. Cypress

Modifique o cypress.config.ts na raiz do projeto e preencha com sua url.

`npm run cy:open` → Para rodar o cypress.

---

### Rodar com o Docker

`docker-compose up --build`

---

## **Variáveis de Ambiente**

Crie o arquivo `.env` na raiz do projeto e preencha com as suas credenciais da API

`MARVEL_PRIVATE_KEY=SUACHAVEAQUI
MARVEL_PUBLIC_KEY=SUACHAVEAQUI`

---

## **Cupons de Desconto**

Os seguintes cupons foram configurados:

- COMMON_COUPON: Cupom para desconto de 10% em quadrinhos comuns.
- RARE_COUPON: Cupom para desconto de 20% em quadrinhos raros.

---

## **Autor**

**Víttor Franceschi**

- **GitHub**: https://github.com/Vacf04
- **LinkedIn**: https://www.linkedin.com/in/vittor-franceschi/
