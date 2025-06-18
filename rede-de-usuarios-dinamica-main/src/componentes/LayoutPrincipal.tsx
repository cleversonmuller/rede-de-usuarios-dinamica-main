
import React from 'react';
import { AppBar, Toolbar, Typography, Container, Box } from '@mui/material';
import { Outlet, Link } from 'react-router-dom';
import { People, Dashboard } from '@mui/icons-material';

const LayoutPrincipal: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#1976d2' }}>
        <Toolbar>
          <Dashboard sx={{ mr: 2 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Sistema de Gerenciamento de Usuários
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Link
              to="/usuarios"
              style={{
                color: 'white',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                borderRadius: '4px',
                transition: 'background-color 0.3s',
              }}
            >
              <People />
              <Typography variant="body1">Usuários</Typography>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Outlet />
      </Container>
    </Box>
  );
};

export default LayoutPrincipal;
