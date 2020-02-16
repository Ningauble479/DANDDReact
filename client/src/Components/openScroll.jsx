import React from 'react'
import { Grid, Box, Slide, Typography } from '@material-ui/core'


export default function(props){

   return(
       <Slide
       in={props.state.open}
       timeout={750}
       direction='down'
       >
       <Grid id='scrollModal'>
            <Box onClick={props.closeScroll} id='scrollLeft'>

            </Box>
           <Box>
                <Box id='openScroll'>
                    <Grid>
                        <Typography variant='h1'>
                        <Box width='100%' textAlign='center'>
                            {props.state.cardName}
                        </Box>
                        </Typography>
                     </Grid>
                </Box>
                <Box id='bottomScroll'>

                </Box>
           </Box>
            <Box onClick={props.closeScroll} id='scrollRight'>

            </Box>
       </Grid>
       </Slide>
   )
}