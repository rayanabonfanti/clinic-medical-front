# Projeto Clínica Médica

Esse projeto foi gerado com Angular CLI versão 14.0.1. Telas de criação de CRUD (create, read, update, delete) de pacientes e médicos para acesso de planos de saúde e fazer consultas médicas agendadas. O objetivo da aplicação é criar consultar agendadas no Ambiente sendo disponibilizado para visualização.

# Funcionalidades
Login (autenticação JWT) com navegação de telas com rotas protegidas por guardas estruturadas para funções de acesso.

# Sugestão de IDE
Visual Studio

# Pré-requisito
- NodeJs<br>
Versão mais atualizada e stable
- CLI Angular
Versão 14.0.1

## Instalação de Dependências
- Para instalar o pacote de gerencianamento. No CMD digite npm install --global yarn<br>
- Após digite, yarn install<br>
- Para instalar o pacote de bootstrap. No CMD digite, npm install bootstrap<br>
- Entre no projeto e encontre o arquivo "angular.json" e coloque essa linha de código "node_modules/bootstrap/dist/css/bootstrap.min.css", na estrutura abaixo:<br>
"styles": [
  "styles.scss"
]<br>
- Para instalar o pacote ngx-bootstrap. No CMD digite, npm install bootstrap ngx-bootstrap --save<br>

## Executando a aplicação
Execute o ng serve ou yarn start no projeto de desenvolvimento, para então ser possível a navegação na web por "http://localhost:4200/". Em qualquer momento que for fazer mudanças no projeto, se tiver rodando o comando, irá fazer a atualização automática, assim podendo visualizar no navegador logo após.<br>

## Andaimes do Código

Execute "ng g c component-name" para gerar um novo componente.<br>
Execute "ng g c pages/<pages-name>" para gerar um novo componente de página.

## Construir
Execute ng build para construir o projeto.<br>

## Testes

Execute ng test para executar os testes unitários via Karma Jasmine.<br>
Execute comando mais completo ng test --watch=false ou ng test coverage --watch=false para executar os testes unitários via Karma Jasmine.
