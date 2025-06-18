
# Dockerfile para a API
FROM node:18-alpine

# Diretório de trabalho
WORKDIR /app

# Copiar arquivos de dependências
COPY api/package*.json ./

# Instalar dependências
RUN npm install

# Copiar código da aplicação
COPY api/ .

# Expor porta
EXPOSE 3001

# Comando para iniciar a aplicação
CMD ["npm", "start"]
