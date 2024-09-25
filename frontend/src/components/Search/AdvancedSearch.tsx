import { RestartAlt } from '@mui/icons-material';
import { Button, FormControl, TextField } from '@mui/material';
import { DatePicker, LocalizationProvider, MobileDatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import 'dayjs/locale/fr';
import React, { useState } from 'react';

export interface IPropsAvancedSearch {
    filterProjectByKeyWord: (value: string | null) => void;
    filterProjectByPeriod: (startDate: Date | null, endDate: Date | null) => void;
}

export interface IStateAdvancedSearch {
    startDate: Date | null;
    endDate: Date | null;
}

const AdvancedSearch: React.FC<IPropsAvancedSearch> = ({ filterProjectByKeyWord, filterProjectByPeriod }) => {
    const [keyWord, setKeyWord] = useState<string>('');
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);

    return (
        <div className='flex bg-white flex-col md:flex-row flex-grow md:flex-grow-0 max-w-[90%] justify-center gap-6 px-6 py-4 shadow-lg rounded mx-auto items-center'>

            <TextField
                id="keyWord"
                value={keyWord}
                label="Rechercher"
                placeholder="Rechercher"
                variant="outlined"
                onChange={(event) => {
                    setKeyWord(event.target.value);
                    filterProjectByKeyWord(event.target.value ?? '');
                    setKeyWord(event.target.value);
                }}
            />
            <div className="flex flex-col md:flex-row gap-4">
                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fr">
                    <FormControl >
                        <div className='hidden md:block'>
                            <DatePicker
                                value={dayjs(startDate)}
                                label="début periode"
                                onChange={(newValue) => {
                                    if (newValue) {
                                        setStartDate(newValue?.toDate());
                                        filterProjectByPeriod(newValue?.toDate(), endDate);
                                    } else {
                                        setStartDate(null);
                                        filterProjectByPeriod(null, endDate);
                                    }

                                }}
                            />
                        </div>
                        <div className='md:hidden'>
                            <MobileDatePicker
                                value={dayjs(startDate)}
                                label="debut période"
                                onChange={(newValue) => {
                                    if (newValue) {
                                        setStartDate(newValue?.toDate());
                                        filterProjectByPeriod(newValue?.toDate(), endDate);
                                    } else {
                                        setStartDate(null);
                                        filterProjectByPeriod(null, endDate);
                                    }

                                }}
                            />
                        </div>
                    </FormControl>
                    <FormControl>
                        <div className='hidden md:block'>
                            <DatePicker
                                className=''
                                label="fin periode"
                                value={dayjs(endDate)}
                                onChange={(newValue) => {
                                    if (newValue) {
                                        setEndDate(newValue?.toDate());
                                        filterProjectByPeriod(startDate, newValue?.toDate());
                                    } else {
                                        setEndDate(null);
                                        filterProjectByPeriod(startDate, null);
                                    }
                                }}

                            />
                        </div>
                        <div className='md:hidden'>
                            <MobileDatePicker
                                value={dayjs(endDate)}
                                label="fin période mb"
                                onChange={(newValue) => {
                                    if (newValue) {
                                        setEndDate(newValue?.toDate());
                                        filterProjectByPeriod(startDate, newValue?.toDate());
                                    } else {
                                        setEndDate(null);
                                        filterProjectByPeriod(startDate, null);
                                    }
                                }}
                            />
                        </div>
                    </FormControl>
                </LocalizationProvider>
            </div>
            <Button
                variant="contained"
                sx={{ textTransform: 'lowercase' }}
                startIcon={<RestartAlt />}
                onClick={() => {
                    setKeyWord('');
                    setKeyWord('');
                    setStartDate(null);
                    setEndDate(null);
                    filterProjectByKeyWord(null);
                    filterProjectByPeriod(null, null);
                }}
            >réinitialiser</Button>
        </div>
    );
};

export default AdvancedSearch;
