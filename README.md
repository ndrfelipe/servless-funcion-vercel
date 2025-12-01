# Como criar e subir uma Function no Vercel utilizando JavaScript

### Autor: André Braga
## Passo 01: prepare o código
Prepare o código: Crie uma pasta nova no seu computador (fora do projeto da Azure). Dentro dela, crie um arquivo package.json simples (rode npm init -y no terminal). Crie uma pasta chamada api. Dentro da pasta api, crie um arquivo health.js.

<img width="1365" height="768" alt="01-iniciar-servidor" src="https://github.com/user-attachments/assets/59f4447a-b9b1-4e70-968e-c5277cb5bd50" />
<img width="1365" height="768" alt="01-iniciar-servidor" src="https://github.com/user-attachments/assets/21ebfe7c-4834-4e54-be46-1b20982bc3d9" />


Código da imagem:
export default function handler(request, response) {
  const date = new Date().toISOString();

  response.status(200).json({
    status: "Online",
    provider: "Vercel Functions",
    message: "Sua serverless function está rodando!",
    timestamp: date
  });
}

## Passo 02: Suba para o github
Crie um repositório no Github.
Suba o projeto lá.

<img width="1916" height="958" alt="03-crie-um-repositorio" src="https://github.com/user-attachments/assets/739cd598-148b-46b2-b55c-35316892d8f1" />


## Passo 03: Deploy na vercel
Acesse vercel.com e crie uma conta (faça login com GitHub).
Clique em "Add New..." -> "Project".
Selecione “Continue with Github” e depois o repositório que você acabou de criar.
<img width="1920" height="992" alt="04-vercel-conecte-no-repositorio-criado" src="https://github.com/user-attachments/assets/19625cc9-fd67-4705-82cc-36003784ebd2" />

Clique em Deploy.

<img width="1913" height="1000" alt="05-clique-em-deploy" src="https://github.com/user-attachments/assets/00b25ace-d711-4ae4-92ba-bd2cea6ed078" />



## Resultado
A Vercel vai te dar um link (ex: seu-projeto.vercel.app). Para acessar sua função, basta adicionar /api/health no final. 
Exemplo: https://servless-funcion-vercel.vercel.app/api/health
<img width="1915" height="947" alt="06-projeto-criado" src="https://github.com/user-attachments/assets/826a33c9-aa0d-498c-8ba2-a3cd9a37669e" />
<img width="1918" height="1002" alt="07-acesse-a-rota-tal" src="https://github.com/user-attachments/assets/6fc5c695-e04d-4c73-8378-85fdb4c098f3" />



