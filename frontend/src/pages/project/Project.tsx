import React from 'react';
import { Content } from '../../services/models/content';




export interface IStateProject {
    searchValue: string;
    searchMonth: string;
}

export default class Project extends React.Component<Content> {
    render() {
        const projectsTag = this.props.projects.map((project, index) => {
            return (
                <div key={index} className='flex flex-col w-full gap-4 p-4 border-2 border-gray-700 rounded max-w-[60%] mx-auto'>
                    <h2 className='text-2xl font-bold text-center'>{project.titre}</h2>
                    <img src={project.illustration} alt={project.titre} className='w-full h-96 object-cover' />
                    <div dangerouslySetInnerHTML={{ __html: project.description }} />
                </div>
            )
        });
        return (
            <div className='flex w-full flex-col gap-12'>
                <div className='flex  justify-center gap-6 px-6 py-4 max-w-[90%] md:min-w-[40%] md:max-x-[50%] border-2 rounded border-gray-700 mx-auto my-4'>
                    <input type='text' placeholder='Rechercher un projet' className='w-1/2 p-2 border border-gray-300 rounded-md' />
                    <select className='p-2 border border-gray-300 rounded-md' >
                        <option disabled value={'default'}>Du mois de:</option>
                        <option value={'1'}>Janvier</option>
                        <option value={'2'}>Février</option>
                        <option value={'3'}>Mars</option>
                        <option value={'4'}>Avril</option>
                        <option value={'5'}>Mai</option>
                        <option value={'6'}>Juin</option>
                        <option value={'7'}>Juillet</option>
                        <option value={'8'}>Août</option>
                        <option value={'9'}>Septembre</option>
                        <option value={'10'}>Octobre</option>
                        <option value={'11'}>Novembre</option>
                        <option value={'12'}>Décembre</option>
                    </select>
                </div>

                <div className='flex flex-col gap-6 w-full justify-center mb-10'>
                    {projectsTag}
                </div>
            </div>
        )
    }
}
