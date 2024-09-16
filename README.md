# App

Gympass style app

## RFs (requisitos funcionais)

- [x] Deve ser possível se cadastrar
- [x] Deve ser possível se autenticar
- [x] Deve ser possível obter o perfil de um usuário logado
- [x] Deve ser possível obter o número de check-ins realizados pelo usuário logado
- [x] Deve ser possível o usuário obter seu histórico de check-ins
- [x] Deve ser possível o usuário buscar academias próximas
- [x] Deve ser possível o usuário buscar uma academia pelo nome
- [x] Deve ser possível o usuário realizar check-in em uma academia
- [x] Deve ser possível validar o check-in de um usuário
- [x] Deve ser possível cadastrar uma academia

## RNs (regras de negócios -associada ao requisito funcional-)

- [x] O usuário não deve poder se cadastrar com um e-mail duplicado
- [x] O usuário não pode fazer 2 check-ins no mesmo dia
- [x] O usuário não pode fazer check-in se não estiver perto (100m) da academia
- [x] O check-in só pode ser validado até 20 minutos após criado
- [] O check-in só pode ser validado por administradores
- [] A academia só pode ser cadastrada por administradores

## RNFs (requisitos não-funcionais -técnicos-)

- [x] A senha do usuário precisa estar criptografada
- [x] Os dados da aplicação precisam estar persistido em um banco PostgresSQL
- [x] Todas listas de dados precisam estar paginadas com 20 itens por página
- [] O usuário deve ser identificado por um JWT (JSON Web Token)

## Anotações

Geralmente se começa pelo caso de uso quando vai ser trabalhado uma nova funcionalidade
isso por que o caso de uso é a parte mais baixo nível da criação e sendo possível trabalhar
com testes unitário. Começar pelo controler por exemplo serve para fornecer um meio de acesso
externo à funcionalidade em si.
Começamos a desenhar a funcionalidade de baixo para cima, pela camada mais baixo nível
até as conexões com meios externos.
