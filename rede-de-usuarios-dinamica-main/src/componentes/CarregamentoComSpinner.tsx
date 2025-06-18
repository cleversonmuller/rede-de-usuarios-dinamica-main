
import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

interface PropriedadesCarregamento {
  mensagem?: string;
}

const CarregamentoComSpinner: React.FC<PropriedadesCarregamento> = ({
  mensagem = 'Carregando...'
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '400px',
        gap: 2,
      }}
    >
      <CircularProgress size={60} thickness={4} />
      <Typography variant="h6" color="text.secondary">
        {mensagem}
      </Typography>
    </Box>
  );
};

export default CarregamentoComSpinner;
