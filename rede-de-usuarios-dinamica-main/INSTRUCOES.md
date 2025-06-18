
# 📘 Instruções de Uso do Sistema

## 🏁 Primeiros Passos

### 1. Inicialização da API

Antes de usar o sistema, você deve iniciar a API containerizada:

```bash
# Na raiz do projeto
docker-compose up -d
```

Isso irá:
- Criar o container da API
- Expor a API na porta 3001
- Disponibilizar os endpoints para consulta

### 2. Verificação da API

Teste se a API está funcionando:

```bash
# Health check
curl http://localhost:3001/health

# Lista de usuários
curl http://localhost:3001/api/usuarios
```

### 3. Execução do Frontend

```bash
# Instalar dependências
npm install

#Instalar outras dependencias:
npm install @mui/icons-material@^5.15.0

# Iniciar servidor de desenvolvimento
npm run dev
```

## 🧭 Navegação no Sistema

### Página Inicial (`/`)
- Apresenta o sistema e suas funcionalidades
- Botão para acessar a lista de usuários
- Informações sobre tecnologias utilizadas

### Página de Usuários (`/usuarios`)
- Lista todos os usuários disponíveis
- Cada usuário é exibido em um cartão
- Botão "👁️" para visualizar detalhes
- Clique abre nova aba com dados completos

### Página de Dados (`/dados/:id`)
- Exibe informações detalhadas do usuário
- Informações pessoais, de contato e profissionais
- Botão para voltar à lista de usuários

## 🔧 Funcionalidades Detalhadas

### Listagem de Usuários
- **Endpoint:** `GET /api/usuarios`
- **Funcionalidade:** Exibe cartões com informações básicas
- **Interação:** Clique no ícone de olho para ver detalhes

### Visualização de Detalhes
- **Endpoint:** `GET /api/usuarios/:id`
- **Funcionalidade:** Dados completos do usuário
- **Abertura:** Nova aba conforme especificado

### Tratamento de Erros
- Loading states durante requisições
- Mensagens de erro amigáveis
- Botão para tentar novamente

## 🛠️ Comandos Docker

### Gerenciamento da API

```bash
# Iniciar API
docker-compose up -d

# Parar API
docker-compose down

# Ver logs
docker-compose logs api-usuarios

# Reiniciar API
docker-compose restart api-usuarios

# Verificar status
docker-compose ps
```

### Debugging

```bash
# Entrar no container
docker-compose exec api-usuarios sh

# Ver logs em tempo real
docker-compose logs -f api-usuarios
```

## 📊 Dados Disponíveis

### Usuários Mock
O sistema contém 5 usuários de exemplo:
- João Silva (ID: 1)
- Maria Santos (ID: 2)
- Pedro Oliveira (ID: 3)
- Ana Costa (ID: 4)
- Carlos Ferreira (ID: 5)

### Informações por Usuário
- **Básicas:** Nome, email, telefone, cidade, empresa, cargo
- **Pessoais:** Idade, estado civil, nacionalidade
- **Endereço:** Logradouro, bairro, CEP, cidade
- **Profissionais:** Departamento, tempo de empresa, salário

## 🔍 Solução de Problemas

### API não responde
```bash
# Verificar se o container está rodando
docker-compose ps

# Verificar logs
docker-compose logs api-usuarios

# Reiniciar
docker-compose restart api-usuarios
```

### Erro de CORS
- A API já está configurada com CORS habilitado
- Verifique se está acessando `http://localhost:3001`

### Dados não carregam
- Confirme que a API está rodando na porta 3001
- Verifique o console do navegador para erros
- Teste os endpoints diretamente

## 🎯 Fluxo de Uso Recomendado

1. **Iniciar Sistema**
   - Execute `docker-compose up -d`
   - Execute `npm run dev`

2. **Acessar Aplicação**
   - Vá para `http://localhost:8080`
   - Clique em "Acessar Sistema"

3. **Explorar Usuários**
   - Visualize a lista de usuários
   - Clique no ícone de olho para ver detalhes

4. **Visualizar Detalhes**
   - Nova aba será aberta
   - Explore todas as informações
   - Use o botão voltar para retornar

## 📝 Observações Importantes

- A aplicação abre detalhes em **nova aba** conforme especificado
- Todos os dados são **mock** - não há banco de dados real
- A API roda em **container Docker** isolado
- Interface totalmente **responsiva** para mobile e desktop
- **Feedback visual** em todas as ações do usuário
