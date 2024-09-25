import { getMonth, getYear } from 'date-fns';
import React, { Fragment } from 'react';
import CardComponent from '../../components/Card/CardComponent';
import Slider from '../../components/Slider/Slider';
import AdvancedSearch from '../../components/Search/AdvancedSearch';
import { Content } from '../../services/models/content';
import { EventContent } from '../../services/models/event';
import { GenericHelper } from '../../utilities/generic-helper';

export interface IEventProps extends Content { }

export interface IEventState {
    events: EventContent[];
    searchValues: {
        keyWord: string;
        month: string;
        year: number;
    }
}

export default class Event extends React.Component<IEventProps, IEventState> {

    constructor(props: IEventProps) {
        super(props);
        this.state = {
            events: props.events,
            searchValues: {
                keyWord: '',
                month: '',
                year: 0
            }
        }
    }

    componentDidUpdate(prevProps: Readonly<IEventProps>, prevState: Readonly<IEventState>, snapshot?: any): void {
        const searchValues = prevState.searchValues;
        const { keyWord, month, year } = this.state.searchValues;

        if (searchValues.keyWord !== keyWord) {
            this.filterEventByKeyWord();
        }
        if (searchValues.month !== month) {
            this.filterEventByMonth();
        }
        if (searchValues.year !== year) {
            this.filterEventByYear();
        }
    }
    
    private filterEventByKeyWord = () => {
        const filterEvents = GenericHelper.filterArryByValue(this.props.events, this.state.searchValues.keyWord, 'titre');
        this.setState({ events: filterEvents });
    }

    private filterEventByMonth = () => {
        const { month } = this.state.searchValues;
        const filterEvents = this.props.events.filter((event) => {
            return getMonth(event.debut_periode) + 1 === parseInt(month)
                || getMonth(event.fin_periode) + 1 === parseInt(month);
        });
        this.setState({ events: filterEvents });
    }

    private filterEventByYear = () => {
        const { year } = this.state.searchValues;
        const filterEvents = this.props.events.filter((event) => {
            return getYear(event.debut_periode) === year || getYear(event.fin_periode) === year;
        });
        this.setState({ events: filterEvents });
    }

    render() {
        const events = this.state.events;
        const buildCardEvent = events.map((event, index) => {
            return <CardComponent
                key={index}
                title={event.titre}
                description={event.description}
                image={event.illustration}
                route={`/evenement/${event.id}`} />
        });


        return (

            <Fragment>
                <div className='flex mt-10'>
                    <AdvancedSearch
                        filterProjectByKeyWord={(event: EventTarget) => this.setState({ searchValues: { ...this.state.searchValues, keyWord: (event as HTMLInputElement).value } })}
                        filterProjectByMonth={(event: EventTarget) => this.setState({ searchValues: { ...this.state.searchValues, month: (event as HTMLInputElement).value } })}
                        filterProjectByYear={(event: EventTarget) => this.setState({ searchValues: { ...this.state.searchValues, year: parseInt((event as HTMLInputElement).value) } })}
                    />
                </div>
                {/* <!-- Slider on desktop--> */}
                {events.length > 0 &&
                    <div className='container mx-auto gap-4 py-16 hidden md:flex'>
                        <Slider components={buildCardEvent} />
                    </div>
                }

                {/* <!-- infinit scroll on mobile--> */}
                <div className="flex flex-col gap-4 px-4 mt-4 md:hidden">
                    {buildCardEvent}
                </div>

                {/* < !--no event found--> */}
                {events.length === 0 && <h2 className='text-2xl text-center py-8'>Aucun evenement trouvé</h2>}

            </Fragment>

        )
    }
}
