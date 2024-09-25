import React, { Fragment } from 'react';
import CardComponent from '../../components/Card/CardComponent';
import AdvancedSearch from '../../components/Search/AdvancedSearch';
import Slider from '../../components/Slider/Slider';
import { Content } from '../../services/models/content';
import { EventContent } from '../../services/models/event';
import { GenericHelper } from '../../utilities/generic-helper';
import dayjs from 'dayjs';

export interface IEventProps extends Content { }

export interface IEventState {
    events: EventContent[];
    searchValues: {
        keyWord: string | null;
        startDate: Date | null;
        endDate: Date | null;
    }
}

export default class Event extends React.Component<IEventProps, IEventState> {

    constructor(props: IEventProps) {
        super(props);
        this.state = {
            events: props.events,
            searchValues: {
                keyWord: '',
                startDate: null,
                endDate: null,
            }
        }
    }

    componentDidUpdate(prevProps: Readonly<IEventProps>, prevState: Readonly<IEventState>, snapshot?: any): void {
        const searchValues = prevState.searchValues;
        const { keyWord, startDate, endDate } = this.state.searchValues;

        if (searchValues.keyWord !== keyWord) {
            this.filterEventByKeyWord();
        }
        if (searchValues.startDate !== startDate || searchValues.endDate !== endDate) {
            this.filterByPeriod();
        }
    }

    private filterEventByKeyWord = () => {
        if (!this.state.searchValues.keyWord) {
            this.setState({ events: this.props.events });
        } else {
            const filterEvents = GenericHelper.filterArryByValue(this.props.events, this.state.searchValues.keyWord, 'titre');
            this.setState({ events: filterEvents });
        }

    }

    private filterByPeriod = () => {
        const { startDate, endDate } = this.state.searchValues;
        if (startDate || endDate) {
            const filterEvents = this.props.events.filter((event) => {
                return dayjs(event.debut_periode).isAfter(startDate) && dayjs(event.fin_periode).isBefore(endDate);
            });
            this.setState({ events: filterEvents });
        } else {
            this.setState({ events: this.props.events });
        }
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
                <div className='flex mt-10 bg-white'>
                    <AdvancedSearch
                        filterProjectByKeyWord={(value: string | null) => this.setState({ searchValues: { ...this.state.searchValues, keyWord: value } })}
                        filterProjectByPeriod={(startDate: Date | null, endDate: Date | null) => this.setState({ searchValues: { ...this.state.searchValues, startDate, endDate } })}
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
