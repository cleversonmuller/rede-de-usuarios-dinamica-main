
import React from 'react';
import { Alert, AlertTitle, Box, Button } from '@mui/material';
import { Refresh } from '@mui/icons-material';

interface PropriedadesMensagemErro {
  titulo?: string;
  mensagem: string;
  aoTentarNovamente?: () => void;
}

const MensagemErro: React.FC<PropriedadesMensagemErro> = ({
  titulo = 'Erro',
  mensagem,
  aoTentarNovamente
}) => {
  return (
    <Box sx={{ mt: 2, mb: 2 }}>
      <Alert severity="error">
        <AlertTitle>{titulo}</AlertTitle>
        {mensagem}
        {aoTentarNovamente && (
          <Box sx={{ mt: 2 }}>
            <Button
              variant="outlined"
              startIcon={<Refresh />}
              onClick={aoTentarNovamente}
              size="small"
            >
              Tentar Novamente
            </Button>
          </Box>
        )}
      </Alert>
    </Box>
  );
};

export default MensagemErro;
