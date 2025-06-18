import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
  Box,
  Paper,
  Card,
  CardContent,
  CardActions,
  Fade
} from '@mui/material';
import {
  People,
  Dashboard,
  DataUsage,
  Api,
  Dock,
  Code
} from '@mui/icons-material';

const Index: React.FC = () => {
  const navigate = useNavigate();

  const handleGoToUsers = () => {
    navigate('/usuarios');
  };

  const handleNavigate = (route: string) => {
    navigate(route);
  };

  const recursos = [
    {
      icone: <People sx={{ fontSize: 40, color: '#1976d2' }} />,
      titulo: 'Gerenciamento de Usuários',
      descricao: 'Visualize e gerencie todos os usuários do sistema com interface intuitiva.',
      acao: 'Ver Usuários',
      rota: '/usuarios'
    },
    {
      icone: <DataUsage sx={{ fontSize: 40, color: '#1976d2' }} />,
      titulo: 'Dados Detalhados',
      descricao: 'Acesse informações completas de cada usuário com um clique.',
      acao: 'Explorar Dados',
      rota: '/usuarios'
    },
    {
      icone: <Api sx={{ fontSize: 40, color: '#1976d2' }} />,
      titulo: 'API Containerizada',
      descricao: 'Backend desenvolvido em Express.js rodando em container Docker.',
      acao: 'Documentação',
      rota: '/api-docs'
    }
  ];

  const tecnologias = [
    { nome: 'React.js', icone: <Code />, descricao: 'Interface moderna e responsiva' },
    { nome: 'Material UI', icone: <Dashboard />, descricao: 'Componentes visuais elegantes' },
    { nome: 'Express.js', icone: <Api />, descricao: 'API REST robusta' },
    { nome: 'Docker', icone: <Dock />, descricao: 'Containerização da aplicação' }
  ];

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      {/* Cabeçalho Principal */}
      <Box sx={{ 
        background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
        color: 'white',
        py: 8
      }}>
        <Container maxWidth="lg">
          <Fade in={true} timeout={1000}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  fontWeight: 'bold',
                  mb: 2,
                  fontSize: { xs: '2.5rem', md: '3.5rem' }
                }}
              >
                Sistema de Gerenciamento
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mb: 4,
                  opacity: 0.9,
                  fontSize: { xs: '1.2rem', md: '1.5rem' }
                }}
              >
                Aplicação completa com React.js, Material UI e API containerizada
              </Typography>
              <Button
                variant="contained"
                size="large"
                onClick={handleGoToUsers}
                sx={{
                  backgroundColor: 'white',
                  color: '#1976d2',
                  fontWeight: 'bold',
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  '&:hover': {
                    backgroundColor: '#f5f5f5',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
                startIcon={<People />}
              >
                Acessar Sistema
              </Button>
            </Box>
          </Fade>
        </Container>
      </Box>

      {/* Seção de Recursos */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Fade in={true} timeout={1200}>
          <Box sx={{ mb: 6, textAlign: 'center' }}>
            <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
              Principais Recursos
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Explore as funcionalidades do sistema
            </Typography>
          </Box>
        </Fade>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center' }}>
          {recursos.map((recurso, indice) => (
            <Box key={indice} sx={{ flex: '1 1 300px', maxWidth: '400px' }}>
              <Fade in={true} timeout={1400 + indice * 200}>
                <Card 
                  sx={{ 
                    height: '100%',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
                    }
                  }}
                >
                  <CardContent sx={{ textAlign: 'center', p: 3 }}>
                    <Box sx={{ mb: 2 }}>
                      {recurso.icone}
                    </Box>
                    <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
                      {recurso.titulo}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {recurso.descricao}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                    <Button
                      variant="outlined"
                      onClick={() => handleNavigate(recurso.rota)}
                      sx={{ fontWeight: 'bold' }}
                    >
                      {recurso.acao}
                    </Button>
                  </CardActions>
                </Card>
              </Fade>
            </Box>
          ))}
        </Box>
      </Container>

      {/* Seção de Tecnologias */}
      <Box sx={{ backgroundColor: 'white', py: 8 }}>
        <Container maxWidth="lg">
          <Fade in={true} timeout={1600}>
            <Box sx={{ mb: 6, textAlign: 'center' }}>
              <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
                Tecnologias Utilizadas
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Stack moderna e robusta
              </Typography>
            </Box>
          </Fade>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'center' }}>
            {tecnologias.map((tech, indice) => (
              <Box key={indice} sx={{ flex: '1 1 200px', maxWidth: '250px' }}>
                <Fade in={true} timeout={1800 + indice * 100}>
                  <Paper
                    elevation={2}
                    sx={{
                      p: 3,
                      textAlign: 'center',
                      height: '100%',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                      }
                    }}
                  >
                    <Box sx={{ color: '#1976d2', mb: 2 }}>
                      {tech.icone}
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                      {tech.nome}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {tech.descricao}
                    </Typography>
                  </Paper>
                </Fade>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Seção de Instruções */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Fade in={true} timeout={2000}>
          <Paper elevation={3} sx={{ p: 4, textAlign: 'center', backgroundColor: '#f8f9fa' }}>
            <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3 }}>
              Como Usar o Sistema
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'center' }}>
              <Box sx={{ flex: '1 1 300px', maxWidth: '400px', mb: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                  1. Iniciar a API
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Execute <code>docker-compose up</code> para iniciar a API containerizada
                </Typography>
              </Box>
              <Box sx={{ flex: '1 1 300px', maxWidth: '400px', mb: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                  2. Navegar pelos Usuários
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Acesse a lista de usuários e explore os dados detalhados
                </Typography>
              </Box>
            </Box>
            <Button
              variant="contained"
              size="large"
              onClick={handleGoToUsers}
              sx={{ mt: 3, fontWeight: 'bold' }}
              startIcon={<People />}
            >
              Começar Agora
            </Button>
          </Paper>
        </Fade>
      </Container>
    </Box>
  );
};

export default Index;