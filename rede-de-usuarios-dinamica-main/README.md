
# Sistema de Gerenciamento de Usuários

Aplicação completa desenvolvida com React.js, Material UI e API containerizada em Docker para gerenciamento de usuários.

## 🚀 Tecnologias Utilizadas

- **Frontend:** React.js, TypeScript, Material UI (MUI)
- **Backend:** Express.js, Node.js
- **Containerização:** Docker, Docker Compose
- **Roteamento:** React Router DOM
- **HTTP Client:** Axios
- **Build Tool:** Vite

## 📋 Funcionalidades

### Rotas da Aplicação

- **`/`** - Página inicial com apresentação do sistema
- **`/usuarios`** - Lista todos os usuários com dados básicos
- **`/dados/:id`** - Exibe dados detalhados do usuário específico

### Recursos Principais

- ✅ Interface responsiva com Material UI
- ✅ Consumo de API REST containerizada
- ✅ Navegação entre páginas com React Router
- ✅ Dados mock para usuários
- ✅ Feedback visual com toasts
- ✅ Loading states e tratamento de erros
- ✅ Abertura de detalhes em nova aba

## 🐳 Configuração com Docker

### Pré-requisitos

- Docker
- Docker Compose
- Node.js (para desenvolvimento local)

### Como Executar

1. **Clone o repositório:**
```bash
git clone <url-do-repositorio>
cd sistema-gerenciamento-usuarios
```

2. **Inicie a API com Docker:**
```bash
docker-compose up -d
```

3. **Instale as dependências do frontend:**
```bash
npm install
```

4. **Execute a aplicação frontend:**
```bash
npm run dev
```

5. **Acesse a aplicação:**
- Frontend: http://localhost:8080
- API: http://localhost:3001

### Endpoints da API

- `GET /api/usuarios` - Lista todos os usuários
- `GET /api/usuarios/:id` - Dados detalhados do usuário
- `GET /health` - Health check da API

## 🏗️ Estrutura do Projeto

```
src/
├── componentes/           # Componentes reutilizáveis
│   ├── CartaoUsuario.tsx
│   ├── CarregamentoComSpinner.tsx
│   ├── LayoutPrincipal.tsx
│   └── MensagemErro.tsx
├── paginas/               # Páginas da aplicação
│   ├── PaginaUsuarios.tsx
│   └── PaginaDados.tsx
├── servicos/              # Serviços de API
│   └── ApiUsuarios.ts
└── pages/                 # Páginas de rota
    └── Index.tsx

api/
├── servidor.js            # Servidor Express
└── package.json           # Dependências da API
```

## 🔧 Comandos Úteis

```bash
# Desenvolvimento
npm run dev                # Inicia o servidor de desenvolvimento

# Docker
docker-compose up         # Inicia a API
docker-compose down       # Para a API
docker-compose logs       # Visualiza logs da API

# Build
npm run build            # Build de produção
npm run preview         # Preview do build
```

## 📝 Convenções de Código

- **Nomes:** Todos os arquivos, classes, métodos e variáveis em português
- **Commits:** Conventional Commits
- **Estrutura:** Arquitetura limpa e organizada
- **Tipos:** TypeScript para type safety

## 🎯 Critérios de Aceite Implementados

- ✅ Duas rotas funcionais (`/usuarios` e `/dados/:id`)
- ✅ API containerizada com Docker
- ✅ Requisições GET para listar usuários
- ✅ Requisições GET para dados detalhados
- ✅ Abertura de detalhes em nova aba
- ✅ Extração de parâmetros da URL
- ✅ Interface com Material UI
- ✅ Dados mock sem banco de dados

## 🚀 Próximos Passos

- Implementar autenticação
- Adicionar operações CRUD completas
- Integrar com banco de dados
- Implementar testes unitários
- Deploy em produção

## 📄 Licença

Este projeto está sob a licença MIT.
