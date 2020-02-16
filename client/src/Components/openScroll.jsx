import React from 'react'
import { Grid, Box, Slide, Typography } from '@material-ui/core'


export default function (props) {
    let data = props.state.scrollData
    return (
        <Slide
            in={props.state.open}
            timeout={750}
            direction='down'
        >
            <Grid id='scrollModal'>
                <Box onClick={props.closeScroll} id='scrollLeft'>

                </Box>
                <Box>
                    <Box pb={12} id='openScroll'>
                        <Grid container direction='column' justify='center'>
                            <Typography variant='h1'>
                                <Box item width='100%' textAlign='center'>
                                    {props.state.cardName}
                                </Box>
                            </Typography>
                            <Typography variant='h4'>
                                <Box item width='100%' textAlign='center'>
                                    {data === null ? null : `Hit Die: ${data.hit_die}`}
                                </Box>
                            </Typography>
                            <Typography variant='h4'>
                                {data === null ?
                                    null
                                    :
                                    (  <React.Fragment>
                                        <Box borderTop='1px solid black' borderBottom='1px solid black' item width='100%' textAlign='center'>
                                            <Grid container direction='column'>
                                                <Box item>Proficiency choices</Box>
                                                { data.proficiency_choices.map((row)=>(
                                                    <React.Fragment>
                                                <Box item>Choose {row.choose} from</Box>
                                                <Box item>
                                                    <ul>{
                                                        row.from.map(
                                                            (row) => (
                                                                <li>{row.name}</li>
                                                            )
                                                        )
                                                    }</ul>
                                                </Box>
                                                </React.Fragment>
                                                ))}
                                            </Grid>
                                        </Box>
                                        <Box textAlign='center' item>
                                            <Typography variant='h3'><Box>Proficiencies</Box></Typography>
                                                {
                                                    data.proficiencies.map((row)=>(
                                                    <Box>{row.name}</Box>
                                                    ))
                                                }
                                        </Box>
                                        <Box borderTop='1px solid black' borderBottom='1px solid black' textAlign='center' item>
                                            <Typography variant='h3'><Box>Saving Throws</Box></Typography>
                                            {
                                                    data.saving_throws.map((row)=>(
                                                    <Box>{row.name}</Box>
                                                    ))
                                                }
                                        </Box>
                                        <Box textAlign='center' item>
                                            <Typography variant='h3'><Box>Sub Classes</Box></Typography>
                                                {
                                                    data.subclasses.map((row)=>(
                                                    <Box>{row.name}</Box>
                                                    ))
                                                }
                                        </Box>
                                        </React.Fragment>
                                    )
                                }
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