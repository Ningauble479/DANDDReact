import React from 'react'
import { Grid, Box, Typography, Slide } from '@material-ui/core'
import { useState } from 'react'
import { useEffect } from 'react'


export default function(props){
    let row = props.row
    const [elementIn, changeElement] = useState(true)
    useEffect(()=>{
        if(props.state.affectedCards.includes(row.name)){
            props.fixCard()
            changeElement(true)
        }
    })
        
    return(
        <Slide
        in={elementIn}
        timeout={750}
        direction='down'
      >
        
        <Box id='card' onClick={()=>{
            setTimeout(
                ()=>{
                    props.openScroll(row.name)
                }, 750
            )
            changeElement(false)
            }}>
            <Grid direction='column' justify='space-between' style={{padding: '20%', height: '100%'}} container>
                    <Typography variant='h3'>
                <Box width='100%' textAlign='center' item>
                    {row.name}
                </Box>
                </Typography>
            </Grid>
            
        </Box>
        </Slide>
    )
}