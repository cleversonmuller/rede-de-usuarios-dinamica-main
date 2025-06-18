
import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  IconButton,
  Tooltip
} from '@mui/material';
import {
  Person,
  Email,
  Phone,
  LocationOn,
  Business,
  Work,
  Visibility
} from '@mui/icons-material';
import { DadosUsuario } from '../servicos/ApiUsuarios';

interface PropriedadesCartaoUsuario {
  usuario: DadosUsuario;
  aoClicarVisualizar: (idUsuario: number) => void;
}

const CartaoUsuario: React.FC<PropriedadesCartaoUsuario> = ({
  usuario,
  aoClicarVisualizar
}) => {
  const handleVisualizarDetalhes = () => {
    aoClicarVisualizar(usuario.id);
  };

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
        },
      }}
    >
      <CardContent sx={{ flexGrow: 1, position: 'relative' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
          <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold', color: '#1976d2' }}>
            {usuario.nome}
          </Typography>
          <Tooltip title="Ver detalhes completos">
            <IconButton
              onClick={handleVisualizarDetalhes}
              sx={{
                color: '#1976d2',
                '&:hover': {
                  backgroundColor: 'rgba(25, 118, 210, 0.1)',
                },
              }}
            >
              <Visibility />
            </IconButton>
          </Tooltip>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Email sx={{ color: '#666', fontSize: 18 }} />
            <Typography variant="body2" color="text.secondary">
              {usuario.email}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Phone sx={{ color: '#666', fontSize: 18 }} />
            <Typography variant="body2" color="text.secondary">
              {usuario.telefone}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <LocationOn sx={{ color: '#666', fontSize: 18 }} />
            <Typography variant="body2" color="text.secondary">
              {usuario.cidade}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Business sx={{ color: '#666', fontSize: 18 }} />
            <Typography variant="body2" color="text.secondary">
              {usuario.empresa}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Work sx={{ color: '#666', fontSize: 18 }} />
            <Typography variant="body2" color="text.secondary">
              {usuario.cargo}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
          <Chip
            icon={<Person />}
            label={`ID: ${usuario.id}`}
            variant="outlined"
            size="small"
            sx={{ color: '#1976d2', borderColor: '#1976d2' }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default CartaoUsuario;
