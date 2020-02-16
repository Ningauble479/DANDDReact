import React from 'react'
import Card from './Cards'
import {Grid} from '@material-ui/core'

export default function(props){
    return(
        <Grid justify='space-between' id='bodyContain' container>
            {
                props.state.data.map(
                    (row)=>(
                        <Card fixCard={props.fixCard} openScroll={props.openScroll} state={props.state} row={row} item/>
                    )
                )
            }
            
        </Grid>
    )
}