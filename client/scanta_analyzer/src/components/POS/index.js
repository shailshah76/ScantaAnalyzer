import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { OutlinedCard } from '../OutlinedCard';
import Typography from '@mui/material/Typography';

export const POS = ({resp}) => {

    return(
        <div>
            <Typography variant="h3" gutterBottom>
                Results
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {Object.keys(resp).map(
                        (val) => {
                            return (
                            <Grid item xs={3}>
                                <OutlinedCard pos={val} value={resp[val]}/>
                            </Grid>
                            )
                        }
                    )}
                </Grid>
            </Box>
        </div>
    )

}