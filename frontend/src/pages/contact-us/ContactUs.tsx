import React from 'react'
import { Content } from '../../services/models/content'

export default class ContactUs extends React.Component<Content, unknown> {
    render() {
        return (
            <div className='mb-4'>
                <h1 className='text-4xl mb-2 w-full text-center my-4'> Nous contacter</h1>
                <div className='flex flex-col md:flex-row items-center w-2/3 mx-auto gap-6 flex-1 min-w-[90%] md:min-w-fit'>
                    <div className='w-full md:w-1/2 bg-gray-400 h-full flex-grow'>
                        <h2 className='text-2xl mb-2 w-full text-center'>Contactez-nous</h2>
                        <p className='text-center'>Vous avez une question ou une suggestion ? N'hésitez pas à nous contacter.</p>
                    </div>
                    <div className='w-full md:w-1/2'>
                        <form className='flex flex-col gap-4'>
                            <div className='flex flex-col gap-2 items-start'>
                                <label htmlFor='name'>Nom</label>
                                <input type='text' id='name' name='name' className='rounded border-2 w-full' />
                            </div>
                            <div className='flex flex-col gap-2 items-start'>
                                <label htmlFor='email'>Email</label>
                                <input type='email' id='email' name='email' className='rounded border-2 w-full' />
                            </div>
                            <div className='flex flex-col gap-2 items-start'>
                                <label htmlFor='message'>Message</label>
                                <textarea id='message' name='message' className='rounded border-2 flex-grow w-full' rows={10} />
                            </div>
                            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4'>Envoyer</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
