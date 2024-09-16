import { FastifyInstance } from "fastify";
import { register } from "./register";
import { authenticate } from "./authenticate";
import { profile } from "./profile";
import { verifyJWT } from "../../middlewares/verify-jwt";
import { refresh } from "./refresh";


export async function userRoutes(app: FastifyInstance) {
    app.post('/users', register)
    app.post('/sessions', authenticate)

    app.patch('/token/refresh', refresh)

    // Authenticated
    app.get('/me', { onRequest: [verifyJWT] }, profile)
}

/* 
## Tres estratégias comuns de autenticação:
    - basic auth: credenciais no cabeçalho(header) da requisição
        ^ converter as credenciais em base 64
        ^
    - JWT(JSON WEB TOKEN):  jwt.io
        ^ login = entrega => um JWT = usado => em todas as requisições com o Header (Bearer) 
        ^ o back-end depois de receber as credenciais gera um token único, não-modificável e STATELESS(não armazenado em nenhuma estrutura de persistencia)
        ^ o back-end quando vai criar o token ele usa uma palavra-chave
        ^ payload é a segunda parte e leva os dados do usuário:
            - o sub representa qual o id do usuário que criou o token
        ^ a assinatura é a terceira parte que o back-end gera
*/
