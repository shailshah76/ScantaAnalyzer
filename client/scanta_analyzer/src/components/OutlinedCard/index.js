import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export function OutlinedCard({pos, value}) {
    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined" style={{
                        borderRadius: 15,
                        backgroundColor: "#E7AB79",
                        fontSize: "18px"
                    }}>
                <React.Fragment>
                    <CardContent>
                        <Typography variant="h5" component="div">
                        {pos}
                        </Typography>
                        <Typography variant="body2">
                        {value}%
                        <br />
                        </Typography>
                    </CardContent>
                </React.Fragment>
            </Card>
        </Box>
    );
}