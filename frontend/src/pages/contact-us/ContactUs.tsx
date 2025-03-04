import React, { ChangeEvent } from 'react';
import { Content } from '../../services/models/content';
import { 
  TextField, 
  Button, 
  Typography, 
  Container, 
  Grid, 
  Paper, 
  Box,
  Card,
  CardContent,
  Snackbar,
  Alert
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

type State = {
  name: string;
  email: string;
  message: string;
  snackbarOpen: boolean;
  snackbarMessage: string;
  snackbarSeverity: 'success' | 'error';
};

export default class ContactUs extends React.Component<Content, State> {
  constructor(props: Content) {
    super(props);

    // Initialisation de l'état local pour stocker les valeurs des champs du formulaire
    this.state = {
      name: '',
      email: '',
      message: '',
      snackbarOpen: false,
      snackbarMessage: '',
      snackbarSeverity: 'success'
    };
  }

  // Gestion des changements dans les champs du formulaire
  handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    
    // Utiliser une approche typée pour mettre à jour l'état
    if (name === 'name' || name === 'email' || name === 'message') {
      this.setState({ [name]: value } as Pick<State, 'name' | 'email' | 'message'>);
    }
  };

  // Gestion de la soumission du formulaire
  handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Les données à envoyer au webhook
    const { name, email, message } = this.state;
    const data = { name, email, message };

    // URL de votre webhook
    const webhookUrl = 'https://ywb7joto3vj6heuohtudnnyo540xdrwq.lambda-url.eu-central-1.on.aws/';

    try {
      // Envoi des données au webhook via une requête POST
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      // Vérifie si l'envoi a réussi
      if (response.ok) {
        this.setState({
          name: '', 
          email: '', 
          message: '',
          snackbarOpen: true,
          snackbarMessage: 'Message envoyé avec succès !',
          snackbarSeverity: 'success'
        });
      } else {
        this.setState({
          snackbarOpen: true,
          snackbarMessage: 'Échec de l&apos;envoi du message. Veuillez réessayer plus tard.',
          snackbarSeverity: 'error'
        });
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi du message:', error);
      this.setState({
        snackbarOpen: true,
        snackbarMessage: 'Une erreur est survenue. Veuillez réessayer plus tard.',
        snackbarSeverity: 'error'
      });
    }
  };

  handleCloseSnackbar = () => {
    this.setState({ snackbarOpen: false });
  };

  render() {
    const { associationInfo } = this.props;
    const { snackbarOpen, snackbarMessage, snackbarSeverity } = this.state;

    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h3" component="h1" align="center" gutterBottom>
          Nous contacter
        </Typography>
        
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {/* Informations de contact */}
          <Grid item xs={12} md={5}>
            <Card elevation={3} sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  Nos coordonnées
                </Typography>
                
                <Box sx={{ mt: 4 }}>
                  {associationInfo && (
                    <>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <LocationOnIcon color="primary" sx={{ mr: 2 }} />
                        <Typography variant="body1">
                          {associationInfo.addresse || "6 RUE Berthe de Boissieux 38000 Grenoble"}
                        </Typography>
                      </Box>
                      
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <PhoneIcon color="primary" sx={{ mr: 2 }} />
                        <Typography variant="body1">
                          {associationInfo.tel || "Téléphone non disponible"}
                        </Typography>
                      </Box>
                      
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <EmailIcon color="primary" sx={{ mr: 2 }} />
                        <Typography variant="body1">
                          {associationInfo.email || "Email non disponible"}
                        </Typography>
                      </Box>
                    </>
                  )}
                </Box>
                
                <Typography variant="body1" sx={{ mt: 4 }}>
                  Vous avez une question ou une suggestion ? N&apos;hésitez pas à nous contacter via le formulaire ou directement par téléphone ou email.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
          {/* Formulaire de contact */}
          <Grid item xs={12} md={7}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h5" component="h2" gutterBottom>
                Envoyez-nous un message
              </Typography>
              
              <Box component="form" onSubmit={this.handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Nom"
                      name="name"
                      variant="outlined"
                      value={this.state.name}
                      onChange={this.handleInputChange}
                      required
                    />
                  </Grid>
                  
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      variant="outlined"
                      value={this.state.email}
                      onChange={this.handleInputChange}
                      required
                    />
                  </Grid>
                  
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      multiline
                      rows={6}
                      variant="outlined"
                      value={this.state.message}
                      onChange={this.handleInputChange}
                      required
                    />
                  </Grid>
                </Grid>
                
                <Button 
                  type="submit"
                  variant="contained" 
                  color="primary"
                  size="large"
                  endIcon={<SendIcon />}
                  sx={{ mt: 3 }}
                >
                  Envoyer
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
        
        <Snackbar 
          open={snackbarOpen} 
          autoHideDuration={6000} 
          onClose={this.handleCloseSnackbar}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert 
            onClose={this.handleCloseSnackbar} 
            severity={snackbarSeverity}
            variant="filled"
            sx={{ width: '100%' }}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Container>
    );
  }
}