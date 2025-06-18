
import React, { useState, useEffect } from 'react';
import {
  Typography,
  Box,
  Paper,
  Grid,
  Divider,
  Chip,
  IconButton,
  Fade,
  Card,
  CardContent,
  Avatar
} from '@mui/material';
import {
  ArrowBack,
  Person,
  Email,
  Phone,
  LocationOn,
  Business,
  Work,
  Home,
  Info,
  AccountBalance
} from '@mui/icons-material';
import { useParams, useNavigate } from 'react-router-dom';

import { UsuarioDetalhado, buscarDadosUsuario } from '../servicos/ApiUsuarios';
import CarregamentoComSpinner from '../componentes/CarregamentoComSpinner';
import MensagemErro from '../componentes/MensagemErro';
import { useToast } from '../hooks/use-toast';

const PaginaDados: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navegar = useNavigate();
  const { toast } = useToast();
  
  const [usuario, setUsuario] = useState<UsuarioDetalhado | null>(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  const carregarDadosUsuario = async () => {
    if (!id) {
      setErro('ID do usuário não fornecido');
      setCarregando(false);
      return;
    }

    try {
      setCarregando(true);
      setErro(null);
      
      console.log(`🔄 Carregando dados detalhados do usuário ID: ${id}`);
      const dadosUsuario = await buscarDadosUsuario(id);
      
      setUsuario(dadosUsuario);
      console.log('✅ Dados do usuário carregados com sucesso!');
      
      toast({
        title: "Sucesso!",
        description: `Dados do usuário ${dadosUsuario.nome} carregados com sucesso.`,
      });
      
    } catch (error) {
      console.error('❌ Erro ao carregar dados do usuário:', error);
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

  const handleVoltarParaUsuarios = () => {
    navegar('/usuarios');
  };

  useEffect(() => {
    carregarDadosUsuario();
  }, [id]);

  if (carregando) {
    return <CarregamentoComSpinner mensagem="Carregando dados detalhados do usuário..." />;
  }

  if (erro) {
    return (
      <MensagemErro
        titulo="Erro ao Carregar Dados"
        mensagem={erro}
        aoTentarNovamente={carregarDadosUsuario}
      />
    );
  }

  if (!usuario) {
    return (
      <MensagemErro
        titulo="Usuário Não Encontrado"
        mensagem="Os dados do usuário solicitado não foram encontrados."
      />
    );
  }

  return (
    <Fade in={true} timeout={800}>
      <Box>
        {/* Cabeçalho com botão de voltar */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <IconButton
            onClick={handleVoltarParaUsuarios}
            sx={{
              mr: 2,
              backgroundColor: '#1976d2',
              color: 'white',
              '&:hover': {
                backgroundColor: '#1565c0',
              },
            }}
          >
            <ArrowBack />
          </IconButton>
          <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold' }}>
            Dados Detalhados do Usuário
          </Typography>
        </Box>

        {/* Informações Principais */}
        <Paper elevation={3} sx={{ p: 3, mb: 4, background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, color: 'white' }}>
            <Avatar
              sx={{
                width: 80,
                height: 80,
                bgcolor: 'rgba(255, 255, 255, 0.2)',
                fontSize: '2rem',
              }}
            >
              {usuario.nome.charAt(0).toUpperCase()}
            </Avatar>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 1 }}>
                {usuario.nome}
              </Typography>
              <Typography variant="h6" sx={{ opacity: 0.9, mb: 1 }}>
                {usuario.cargo} - {usuario.empresa}
              </Typography>
              <Chip
                label={`ID: ${usuario.id}`}
                variant="outlined"
                sx={{
                  color: 'white',
                  borderColor: 'rgba(255, 255, 255, 0.5)',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                }}
              />
            </Box>
          </Box>
        </Paper>

        {/* Dados Detalhados */}
        <Grid container spacing={3}>
          {/* Informações de Contato */}
          <Grid item xs={12} md={6}>
            <Card elevation={2} sx={{ height: '100%' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Email sx={{ color: '#1976d2', mr: 1 }} />
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    Informações de Contato
                  </Typography>
                </Box>
                <Divider sx={{ mb: 2 }} />
                
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Email sx={{ color: '#666' }} />
                    <Box>
                      <Typography variant="caption" display="block" color="text.secondary">
                        Email
                      </Typography>
                      <Typography variant="body1">{usuario.email}</Typography>
                    </Box>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Phone sx={{ color: '#666' }} />
                    <Box>
                      <Typography variant="caption" display="block" color="text.secondary">
                        Telefone
                      </Typography>
                      <Typography variant="body1">{usuario.telefone}</Typography>
                    </Box>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <LocationOn sx={{ color: '#666' }} />
                    <Box>
                      <Typography variant="caption" display="block" color="text.secondary">
                        Cidade
                      </Typography>
                      <Typography variant="body1">{usuario.cidade}</Typography>
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Informações Pessoais */}
          <Grid item xs={12} md={6}>
            <Card elevation={2} sx={{ height: '100%' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Person sx={{ color: '#1976d2', mr: 1 }} />
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    Informações Pessoais
                  </Typography>
                </Box>
                <Divider sx={{ mb: 2 }} />
                
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Info sx={{ color: '#666' }} />
                    <Box>
                      <Typography variant="caption" display="block" color="text.secondary">
                        Idade
                      </Typography>
                      <Typography variant="body1">{usuario.informacoesPessoais.idade} anos</Typography>
                    </Box>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Info sx={{ color: '#666' }} />
                    <Box>
                      <Typography variant="caption" display="block" color="text.secondary">
                        Estado Civil
                      </Typography>
                      <Typography variant="body1">{usuario.informacoesPessoais.estadoCivil}</Typography>
                    </Box>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Info sx={{ color: '#666' }} />
                    <Box>
                      <Typography variant="caption" display="block" color="text.secondary">
                        Nacionalidade
                      </Typography>
                      <Typography variant="body1">{usuario.informacoesPessoais.nacionalidade}</Typography>
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Endereço Completo */}
          <Grid item xs={12} md={6}>
            <Card elevation={2} sx={{ height: '100%' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Home sx={{ color: '#1976d2', mr: 1 }} />
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    Endereço Completo
                  </Typography>
                </Box>
                <Divider sx={{ mb: 2 }} />
                
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Box>
                    <Typography variant="caption" display="block" color="text.secondary">
                      Logradouro
                    </Typography>
                    <Typography variant="body1">{usuario.enderecoCompleto.logradouro}</Typography>
                  </Box>
                  
                  <Box>
                    <Typography variant="caption" display="block" color="text.secondary">
                      Bairro
                    </Typography>
                    <Typography variant="body1">{usuario.enderecoCompleto.bairro}</Typography>
                  </Box>
                  
                  <Box>
                    <Typography variant="caption" display="block" color="text.secondary">
                      CEP
                    </Typography>
                    <Typography variant="body1">{usuario.enderecoCompleto.cep}</Typography>
                  </Box>
                  
                  <Box>
                    <Typography variant="caption" display="block" color="text.secondary">
                      Cidade
                    </Typography>
                    <Typography variant="body1">{usuario.enderecoCompleto.cidade}</Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Informações Profissionais */}
          <Grid item xs={12} md={6}>
            <Card elevation={2} sx={{ height: '100%' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Business sx={{ color: '#1976d2', mr: 1 }} />
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    Informações Profissionais
                  </Typography>
                </Box>
                <Divider sx={{ mb: 2 }} />
                
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Business sx={{ color: '#666' }} />
                    <Box>
                      <Typography variant="caption" display="block" color="text.secondary">
                        Empresa
                      </Typography>
                      <Typography variant="body1">{usuario.empresa}</Typography>
                    </Box>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Work sx={{ color: '#666' }} />
                    <Box>
                      <Typography variant="caption" display="block" color="text.secondary">
                        Cargo
                      </Typography>
                      <Typography variant="body1">{usuario.cargo}</Typography>
                    </Box>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <AccountBalance sx={{ color: '#666' }} />
                    <Box>
                      <Typography variant="caption" display="block" color="text.secondary">
                        Departamento
                      </Typography>
                      <Typography variant="body1">{usuario.informacoesProfissionais.departamento}</Typography>
                    </Box>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Info sx={{ color: '#666' }} />
                    <Box>
                      <Typography variant="caption" display="block" color="text.secondary">
                        Tempo na Empresa
                      </Typography>
                      <Typography variant="body1">{usuario.informacoesProfissionais.tempoEmpresa}</Typography>
                    </Box>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <AccountBalance sx={{ color: '#666' }} />
                    <Box>
                      <Typography variant="caption" display="block" color="text.secondary">
                        Salário
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
                        {usuario.informacoesProfissionais.salario}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Fade>
  );
};

export default PaginaDados;
