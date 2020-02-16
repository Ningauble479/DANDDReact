import React from 'react'
import { Grid, Box } from '@material-ui/core'

export default function(props){
    return(
        <Grid style={{width:'100%'}}>
            <Box id='paperBackground' width='100%' height='6vh'>
                <Grid container justify='space-between'>
                    <Box pl={5} pr={5} pt={2} pb={2} id='navButtons' textAlign='center' height='100%' width='15%' item>
                        Character Data
                    </Box>
                    <Box  onClick={()=>props.changeSearch('Classes')} pl={5} pr={5} pt={2} pb={2} id='navButtons' textAlign='center' height='100%' width='15%' item>
                        Classes
                    </Box>
                    <Box onClick={()=>props.changeSearch('Races')} pl={5} pr={5} pt={2} pb={2} id='navButtons' textAlign='center' height='100%' width='15%' item>
                        Races
                    </Box>
                    <Box onClick={()=>props.changeSearch('Equipment')} pl={5} pr={5} pt={2} pb={2} id='navButtons' textAlign='center' height='100%' width='15%' item>
                        Equipment
                    </Box>
                    <Box pl={5} pr={5} pt={2} pb={2} id='navButtons' textAlign='center' height='100%' width='15%' item>
                        Game Mechanics
                    </Box>
                </Grid>
            </Box>
        </Grid>
    )
}