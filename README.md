# 🛠️ Oficina Mecânica API

Uma API REST completa desenvolvida para a gestão de processos, ordens de serviço, clientes e peças de uma oficina mecânica. O sistema conta com autenticação segura de usuários, criptografia de senhas, validação de dados e integração com serviços externos.

---

## 🚀 Funcionalidades Principais

* **Autenticação e Segurança:** Registro e login de usuários com criptografia de senhas e geração de tokens para proteção de rotas privadas.
* **Gestão de Clientes:** Cadastro completo, atualização e listagem de clientes integrados com busca automática de endereço.
* **Ordens de Serviço (O.S.):** Abertura, monitoramento de status, atribuição de mecânicos, descrição de problemas e fechamento de valores.
* **Controle de Estoque/Peças:** Cadastro de componentes utilizados nos reparos com vínculo direto às ordens de serviço.

---

## 🧠 Diferenciais Técnicos e Arquitetura

O projeto foi estruturado seguindo as melhores práticas de desenvolvimento de software de mercado para garantir escalabilidade e segurança:

### 🔒 1. Segurança com JWT e Bcrypt
* **Bcrypt:** Utilizado para realizar o hashing das senhas antes de salvá-las no banco de dados. Isso garante que, mesmo em caso de vazamento do banco, as senhas originais permaneçam ilegíveis através de técnicas de salting.
* **JSON Web Token (JWT):** Implementado para o controle de sessões. Ao fazer login, o usuário recebe um token assinado que deve ser enviado no cabeçalho (Authorization Header) de todas as requisições subsequentes para acessar as rotas protegidas da API.

### 🗄️ 2. Banco de Dados Não-Relacional (MongoDB)
* Utilização do MongoDB para lidar com dados de estrutura flexível e dinâmica, ideal para o histórico de ordens de serviço onde o número de peças e serviços pode variar drasticamente de um carro para outro.
* Modelagem de dados realizada através do Mongoose, aplicando validações estritas diretamente nos Schemas da aplicação.

### 🌐 3. Integração com APIs Externas (ViaCEP)
* Consumo automatizado da API pública do ViaCEP no cadastro de clientes. O sistema recebe o CEP, faz uma requisição HTTP em background e preenche automaticamente os campos de endereço (Rua, Bairro, Cidade e Estado), reduzindo erros de digitação humana e otimizando o fluxo de cadastro.

---

## 🛠️ Tecnologias Utilizadas

* **Runtime:** Node.js
* **Framework Web:** Express
* **Banco de Dados:** MongoDB (via Mongoose)
* **Segurança:** JSON Web Token (JWT) e Bcrypt.js
* **Integrações:** Axios (ou Fetch) para consumo da API ViaCEP
* **Testes e Validação:** Postman

---

## ⚙️ Como Executar o Projeto Localmente

### Pré-requisitos
Você precisará ter instalado em sua máquina:
* Node.js (versão 16 ou superior)
* MongoDB (rodando localmente ou uma string de conexão do MongoDB Atlas)

### Passo a Passo Técnico

**1. Clonar o repositório:**

    git clone [https://github.com/JBEstevan/projetoOficina.git](https://github.com/JBEstevan/projetoOficina.git)
    cd projetoOficina

**2. Instalar as dependências do ecossistema Node:**

    npm install

**3. Configurar as variáveis de ambiente:**
Crie um arquivo chamado .env na raiz do projeto e preencha com as suas credenciais:

    PORT=3000
    MONGO_URI=sua_string_de_conexao_do_mongodb
    JWT_SECRET=sua_chave_secreta_para_o_jwt

**4. Iniciar o servidor de desenvolvimento:**

    npm start

O servidor iniciará por padrão na porta 3000 -> http://localhost:3000

---

## 🧪 Como Testar as Rotas (Postman / Insomnia)

A API possui endpoints estruturados sob o padrão arquitetural REST. Para validar o fluxo de proteção de rotas:

1. Execute uma requisição POST /auth/register para cadastrar uma nova credencial administrativa.
2. Execute a rota POST /auth/login informando os dados cadastrados.
3. Copie o hash do token retornado no corpo da resposta.
4. No Postman, acesse a aba Authorization, selecione o tipo Bearer Token e cole o código correspondente.
5. Com a autenticação ativa, as requisições para os endpoints /clientes e /ordens serão liberadas pelo servidor.

---

## 👨‍💻 Autor

Desenvolvido por Juan Estevan - Estudante de Análise e Desenvolvimento de Sistemas (UTFPR).
