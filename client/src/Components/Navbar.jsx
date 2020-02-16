import React from 'react'
import { Grid, Box, Button, Menu, MenuItem } from '@material-ui/core'

export default function (props) {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setTimeout(()=>{
        setAnchorEl(null);}
        ,1
        )
    };

    return (
        <Grid style={{ width: '100%' }}>
            <Box id='paperBackground' width='100%' height='6vh'>
                <Grid container justify='space-between'>
                    <Box pl={5} pr={5} pt={2} pb={2} aria-controls="simple-menu" aria-haspopup="true" id='navButtons' onClick={handleClick} textAlign='center' height='100%' width='15%' item>
                        Characters
                        </Box>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            style={{
                                left: 0,
                                top: '60px'
                            }}
                        >
                            <MenuItem onClick={()=>{
                                props.openCharScroll()
                                handleClose()
                                }}>Create Character</MenuItem>
                            <MenuItem onClick={handleClose}>View Characters</MenuItem>
                        </Menu>
                    
                    <Box onClick={() => props.changeSearch('Classes')} pl={5} pr={5} pt={2} pb={2} id='navButtons' textAlign='center' height='100%' width='15%' item>
                        Classes
                    </Box>
                    <Box onClick={() => props.changeSearch('Races')} pl={5} pr={5} pt={2} pb={2} id='navButtons' textAlign='center' height='100%' width='15%' item>
                        Races
                    </Box>
                    <Box onClick={() => props.changeSearch('Equipment')} pl={5} pr={5} pt={2} pb={2} id='navButtons' textAlign='center' height='100%' width='15%' item>
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