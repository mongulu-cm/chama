import React from 'react';
import { Box, Typography, Paper, SvgIcon } from '@mui/material';
import './MissingData.css';

interface MissingDataProps {
  message?: string;
  icon?: React.ReactNode;
}

const DefaultIcon = () => (
  <SvgIcon fontSize="large" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
  </SvgIcon>
);

const MissingData: React.FC<MissingDataProps> = ({ 
  message = "Les données seront complétées prochainement", 
  icon 
}) => {
  return (
    <Paper 
      elevation={2} 
      className="missing-data-container"
      sx={{ 
        p: 4, 
        my: 3, 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        borderRadius: 2,
        backgroundColor: '#f5f5f5',
        maxWidth: '100%',
        mx: 'auto'
      }}
    >
      <Box 
        className="missing-data-icon"
        sx={{ 
          color: 'primary.main', 
          mb: 2,
          animation: 'pulse 2s infinite'
        }}
      >
        {icon || <DefaultIcon />}
      </Box>
      
      <Typography 
        variant="h6" 
        component="h3" 
        align="center"
        sx={{ mb: 1 }}
      >
        Contenu en cours de préparation
      </Typography>
      
      <Typography 
        variant="body1" 
        align="center"
        color="text.secondary"
      >
        {message}
      </Typography>
    </Paper>
  );
};

export default MissingData; 