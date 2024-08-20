import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React from 'react';

export interface IPropsAvancedSearch {
    filterProjectByKeyWord: (event: EventTarget) => void;
    filterProjectByMonth: (event: EventTarget) => void;
    filterProjectByYear: (event: EventTarget) => void;
}


export default class AdvancedSearch extends React.Component<IPropsAvancedSearch> {

  

    render() {
        const { filterProjectByKeyWord, filterProjectByMonth } = this.props;
        return (
            <div className='flex flex-grow max-w-[90%] md:max-w-[50%] justify-center gap-6 px-6 py-4 border-2 rounded border-gray-700 mx-auto flex-wrap items-center'>

                <Box sx={{ minWidth: '200px' }}>
                    <TextField
                        id="keyWord"
                        label="Rechercher un projet"
                        variant="outlined"
                        onChange={(event) => filterProjectByKeyWord(event.target)}
                    />
                </Box>
                <FormControl>
                    <InputLabel id="select-month-search">Mois</InputLabel>
                    <Box sx={{ minWidth: '200px' }}>
                        <Select fullWidth

                            labelId="select-month-search"
                            id="demo-simple-select"
                            value={0}
                            label="Mois"
                            onChange={(event: { target: EventTarget; }) => filterProjectByMonth(event.target)}
                        >
                            <MenuItem value={0}>Tous les mois</MenuItem>
                            <MenuItem value={1}>Janvier</MenuItem>
                            <MenuItem value={2}>Février</MenuItem>
                            <MenuItem value={3}>Mars</MenuItem>
                            <MenuItem value={4}>Avril</MenuItem>
                            <MenuItem value={5}>Mai</MenuItem>
                            <MenuItem value={6}>Juin</MenuItem>
                            <MenuItem value={7}>Juillet</MenuItem>
                            <MenuItem value={8}>Août</MenuItem>
                            <MenuItem value={9}>Septembre</MenuItem>
                            <MenuItem value={10}>Octobre</MenuItem>
                            <MenuItem value={11}>Novembre</MenuItem>
                            <MenuItem value={12}>Décembre</MenuItem>
                        </Select>
                    </Box>
                </FormControl>
                
                <Box sx={{ minWidth: '100px' }}>
                    <TextField
                        id="year"
                        label="Année"
                        variant="outlined"
                        onChange={(event) => filterProjectByMonth(event.target)}
                    />
                </Box>
            </div>
        )
    }
}
