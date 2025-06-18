
const express = require('express');
const cors = require('cors');

const aplicacao = express();
const porta = process.env.PORT || 3001;

// Middleware
aplicacao.use(cors());
aplicacao.use(express.json());

// Dados mock dos usuários
const usuarios = [
  {
    id: 1,
    nome: 'João Silva',
    email: 'joao.silva@email.com',
    telefone: '(11) 99999-1234',
    cidade: 'São Paulo',
    empresa: 'Tech Solutions',
    cargo: 'Desenvolvedor Frontend'
  },
  {
    id: 2,
    nome: 'Maria Santos',
    email: 'maria.santos@email.com',
    telefone: '(21) 99999-5678',
    cidade: 'Rio de Janeiro',
    empresa: 'Digital Agency',
    cargo: 'Designer UX/UI'
  },
  {
    id: 3,
    nome: 'Pedro Oliveira',
    email: 'pedro.oliveira@email.com',
    telefone: '(31) 99999-9012',
    cidade: 'Belo Horizonte',
    empresa: 'StartupXYZ',
    cargo: 'Product Manager'
  },
  {
    id: 4,
    nome: 'Ana Costa',
    email: 'ana.costa@email.com',
    telefone: '(41) 99999-3456',
    cidade: 'Curitiba',
    empresa: 'InnovaCorp',
    cargo: 'Analista de Dados'
  },
  {
    id: 5,
    nome: 'Carlos Ferreira',
    email: 'carlos.ferreira@email.com',
    telefone: '(51) 99999-7890',
    cidade: 'Porto Alegre',
    empresa: 'CloudTech',
    cargo: 'DevOps Engineer'
  }
];

// Rota para listar todos os usuários
aplicacao.get('/api/usuarios', (requisicao, resposta) => {
  console.log('Requisição recebida para listar usuários');
  resposta.json({
    sucesso: true,
    dados: usuarios,
    total: usuarios.length
  });
});

// Rota para obter dados detalhados de um usuário específico
aplicacao.get('/api/usuarios/:id', (requisicao, resposta) => {
  const idUsuario = parseInt(requisicao.params.id);
  console.log(`Requisição recebida para usuário ID: ${idUsuario}`);
  
  const usuario = usuarios.find(u => u.id === idUsuario);
  
  if (!usuario) {
    return resposta.status(404).json({
      sucesso: false,
      mensagem: 'Usuário não encontrado'
    });
  }
  
  // Dados detalhados do usuário
  const dadosDetalhados = {
    ...usuario,
    informacoesPessoais: {
      idade: Math.floor(Math.random() * 30) + 25,
      estadoCivil: ['Solteiro', 'Casado', 'Divorciado'][Math.floor(Math.random() * 3)],
      nacionalidade: 'Brasileira'
    },
    enderecoCompleto: {
      logradouro: `Rua das Flores, ${Math.floor(Math.random() * 999) + 1}`,
      bairro: ['Centro', 'Vila Nova', 'Jardins', 'Copacabana'][Math.floor(Math.random() * 4)],
      cep: `${Math.floor(Math.random() * 90000) + 10000}-${Math.floor(Math.random() * 900) + 100}`,
      cidade: usuario.cidade
    },
    informacoesProfissionais: {
      tempoEmpresa: `${Math.floor(Math.random() * 5) + 1} anos`,
      salario: `R$ ${(Math.random() * 8000 + 3000).toFixed(2)}`,
      departamento: ['Tecnologia', 'Marketing', 'Vendas', 'RH'][Math.floor(Math.random() * 4)]
    }
  };
  
  resposta.json({
    sucesso: true,
    dados: dadosDetalhados
  });
});

// Rota de health check
aplicacao.get('/health', (requisicao, resposta) => {
  resposta.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    servico: 'API Usuarios'
  });
});

aplicacao.listen(porta, () => {
  console.log(`🚀 Servidor rodando na porta ${porta}`);
  console.log(`📋 Rotas disponíveis:`);
  console.log(`   GET /api/usuarios - Lista todos os usuários`);
  console.log(`   GET /api/usuarios/:id - Dados detalhados do usuário`);
  console.log(`   GET /health - Health check`);
});
