import React from 'react'
import { Grid, Box, Typography } from '@material-ui/core'

export default function(){
    return(
        <Grid>
            <Typography variant='h1'>
                <Box id='header-background' color='white' height='40vh' width='100vw' textAlign='center' pt={12}>
                    <span style={{color: 'red'}}>D</span>ungeons <span style={{color: 'red'}}>& D</span>ragons Info Broker
                </Box>
            </Typography>
        </Grid>
    )
}