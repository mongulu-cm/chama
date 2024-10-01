import React, { ChangeEvent } from 'react';
import { Content } from '../../services/models/content';

type State = {
  name: string;
  email: string;
  message: string;
};

export default class ContactUs extends React.Component<Content, State> {
  constructor(props: Content) {
    super(props);

    // Initialisation de l'état local pour stocker les valeurs des champs du formulaire
    this.state = {
      name: '',
      email: '',
      message: ''
    };
  }

  // Gestion des changements dans les champs du formulaire
  handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    this.setState({ [name]: value } as Pick<State, keyof State>);
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
        alert('Message envoyé avec succès !');
        // Réinitialise le formulaire après envoi
        this.setState({ name: '', email: '', message: '' });
      } else {
        alert('Échec de l\'envoi du message. Veuillez réessayer plus tard.');
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi du message:', error);
      alert('Une erreur est survenue. Veuillez réessayer plus tard.');
    }
  };

  render() {
    return (
      <div className='mb-4'>
        <h1 className='text-4xl mb-2 w-full text-center my-4'>Nous contacter</h1>
        <div className='flex flex-col md:flex-row items-center w-2/3 mx-auto gap-6 flex-1 min-w-[90%] md:min-w-fit'>
          <div className='w-full md:w-1/2 bg-gray-400 h-full flex-grow'>
            <h2 className='text-2xl mb-2 w-full text-center'>Contactez-nous</h2>
            <p className='text-center'>Vous avez une question ou une suggestion ? N'hésitez pas à nous contacter.</p>
          </div>
          <div className='w-full md:w-1/2'>
            <form className='flex flex-col gap-4' onSubmit={this.handleSubmit}>
              <div className='flex flex-col gap-2 items-start'>
                <label htmlFor='name'>Nom</label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  className='rounded border-2 w-full'
                  value={this.state.name}
                  onChange={this.handleInputChange}
                  required
                />
              </div>
              <div className='flex flex-col gap-2 items-start'>
                <label htmlFor='email'>Email</label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  className='rounded border-2 w-full'
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  required
                />
              </div>
              <div className='flex flex-col gap-2 items-start'>
                <label htmlFor='message'>Message</label>
                <textarea
                  id='message'
                  name='message'
                  className='rounded border-2 flex-grow w-full'
                  rows={10}
                  value={this.state.message}
                  onChange={this.handleInputChange}
                  required
                />
              </div>
              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4'>
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}