
import React, { useState, useEffect } from 'react';
import {
  Typography,
  Grid,
  Box,
  Paper,
  Fade,
  Chip
} from '@mui/material';
import { People, TrendingUp } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

import { DadosUsuario, buscarTodosUsuarios } from '../servicos/ApiUsuarios';
import CartaoUsuario from '../componentes/CartaoUsuario';
import CarregamentoComSpinner from '../componentes/CarregamentoComSpinner';
import MensagemErro from '../componentes/MensagemErro';
import { useToast } from '../hooks/use-toast';

const PaginaUsuarios: React.FC = () => {
  const [usuarios, setUsuarios] = useState<DadosUsuario[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState<string | null>(null);
  const navegar = useNavigate();
  const { toast } = useToast();

  const carregarUsuarios = async () => {
    try {
      setCarregando(true);
      setErro(null);
      
      console.log('🔄 Iniciando carregamento dos usuários...');
      const dadosUsuarios = await buscarTodosUsuarios();
      
      setUsuarios(dadosUsuarios);
      console.log(`✅ ${dadosUsuarios.length} usuários carregados com sucesso!`);
      
      toast({
        title: "Sucesso!",
        description: `${dadosUsuarios.length} usuários carregados com sucesso.`,
      });
      
    } catch (error) {
      console.error('❌ Erro ao carregar usuários:', error);
      const mensagemErro = error instanceof Error ? error.message : 'Erro desconhecido';
      setErro(mensagemErro);
      
      toast({
        title: "Erro!",
        description: mensagemErro,
        variant: "destructive",
      });
    } finally {
      setCarregando(false);
    }
  };

  const handleVisualizarDetalhes = (idUsuario: number) => {
    console.log(`🔍 Abrindo detalhes do usuário ID: ${idUsuario}`);
    
    // Abrir em nova aba conforme especificado
    const urlDetalhes = `/dados/${idUsuario}`;
    window.open(urlDetalhes, '_blank');
    
    toast({
      title: "Redirecionando...",
      description: `Abrindo detalhes do usuário em nova aba.`,
    });
  };

  useEffect(() => {
    carregarUsuarios();
  }, []);

  if (carregando) {
    return <CarregamentoComSpinner mensagem="Carregando lista de usuários..." />;
  }

  if (erro) {
    return (
      <MensagemErro
        titulo="Erro ao Carregar Usuários"
        mensagem={erro}
        aoTentarNovamente={carregarUsuarios}
      />
    );
  }

  return (
    <Fade in={true} timeout={800}>
      <Box>
        {/* Cabeçalho da Página */}
        <Paper elevation={3} sx={{ p: 3, mb: 4, background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, color: 'white' }}>
            <People sx={{ fontSize: 40 }} />
            <Box>
              <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', mb: 1 }}>
                Gerenciamento de Usuários
              </Typography>
              <Typography variant="subtitle1" sx={{ opacity: 0.9 }}>
                Visualize e gerencie todos os usuários do sistema
              </Typography>
            </Box>
          </Box>
        </Paper>

        {/* Estatísticas */}
        <Box sx={{ mb: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Paper elevation={2} sx={{ p: 2, textAlign: 'center' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                  <TrendingUp sx={{ color: '#1976d2' }} />
                  <Typography variant="h6" color="primary">
                    Total de Usuários
                  </Typography>
                </Box>
                <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#1976d2', mt: 1 }}>
                  {usuarios.length}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={2} sx={{ p: 2, textAlign: 'center' }}>
                <Typography variant="h6" color="primary" sx={{ mb: 1 }}>
                  Status do Sistema
                </Typography>
                <Chip
                  label="API Conectada"
                  color="success"
                  variant="filled"
                  sx={{ fontSize: '1rem', fontWeight: 'bold' }}
                />
              </Paper>
            </Grid>
          </Grid>
        </Box>

        {/* Lista de Usuários */}
        <Box>
          <Typography variant="h5" component="h2" sx={{ mb: 3, fontWeight: 'bold' }}>
            Lista de Usuários
          </Typography>
          
          {usuarios.length === 0 ? (
            <Paper elevation={1} sx={{ p: 4, textAlign: 'center' }}>
              <Typography variant="h6" color="text.secondary">
                Nenhum usuário encontrado
              </Typography>
            </Paper>
          ) : (
            <Grid container spacing={3}>
              {usuarios.map((usuario, indice) => (
                <Grid item xs={12} sm={6} md={4} key={usuario.id}>
                  <Fade in={true} timeout={800 + indice * 200}>
                    <div>
                      <CartaoUsuario
                        usuario={usuario}
                        aoClicarVisualizar={handleVisualizarDetalhes}
                      />
                    </div>
                  </Fade>
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      </Box>
    </Fade>
  );
};

export default PaginaUsuarios;
