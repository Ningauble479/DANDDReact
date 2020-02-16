import React from 'react'
import { Grid, Box, Slide, Typography, FormControl, Input, Button, TextField } from '@material-ui/core'
import { useState } from 'react'
import Axios from 'axios'




function StepRender(props) {
    let [data, setData] = useState(null)
    let [race, setRace] = useState(null)
    let [classs, setClass] = useState(null)
    let [strength, setStrength] = useState(null)
    let [dexterity, setDexterity] = useState(null)
    let [constitution, setConst] = useState(null)
    let [intelligence, setIntel] = useState(null)
    let [wisdom, setWisdom] = useState(null)
    let [charisma, setCharis] = useState(null)
    let [info, setInfo] = useState(null)

    let setStats = () => {
        setStrength(Math.floor(Math.random() * 6))
        setDexterity(Math.floor(Math.random() * 6))
        setConst(Math.floor(Math.random() * 6))
        setIntel(Math.floor(Math.random() * 6))
        setWisdom(Math.floor(Math.random() * 6))
        setCharis(Math.floor(Math.random() * 6))
    }
    if (props.step === 0) {
        return (
            <FormControl>
                <Input
                    placeholder='email or username here'
                    style={{
                        width: '75%',
                        alignSelf: 'center',
                        paddingTop: '50px'
                    }}
                    onChange={e => props.setEmail(e.target.value)}
                    value={props.email}
                />
                <Button variant='contained' onClick={() => {
                    Axios
                    .get('https://cors-anywhere.herokuapp.com/http://dnd5eapi.co/api/races')
                    .then((res)=>{setData(res.data.results)})
                    
                    props.setStep(props.step + 1)
                    }} style={{ width: '50%', alignSelf: 'center', marginTop: '50px' }}>Finish</Button>
            </FormControl>
        )
    }
    else if (props.step === 1) {
        return (<Box mt={6} borderTop='1px solid black'>
            <Typography variant='h3'><Box pt={4} mb={4} textAlign='center'>Select Race</Box></Typography>
            <Grid>
                { data === null ? 
                (<Box>Loading</Box>)
                :
                data.map((row)=>(
                    <Typography variant='h4'><Box onClick={()=>{
                        props.setStep(props.step + 1)
                        setData(null)
                        Axios
                        .get('https://cors-anywhere.herokuapp.com/http://dnd5eapi.co/api/classes')
                        .then((res)=>{setData(res.data.results)})
                        setClass(row.name)}} className='buttonHover' textAlign='center'>{row.name}</Box></Typography>
                ))
                }
            </Grid>
            </Box>
        )
    }
    else if (props.step === 2) {
        return(
            <Box mt={6} borderTop='1px solid black'>
                <Typography variant='h3'><Box pt={4} mb={4} textAlign='center'>Select Race</Box></Typography>
            {data === null ?
            (<Box>Loading</Box>)
            :
            (
                data.map((row)=>(
                    <Typography variant='h4'><Box onClick={()=>{
                        props.setStep(props.step + 1)
                        setData(null)
                        setRace(row.name)
                        setStats()}} className='buttonHover' textAlign='center'>{row.name}</Box></Typography>
                ))
            )}</Box>
        )
    }
    else if (props.step === 3) {
        return(
            <Box mt={6} borderTop='1px solid black'>
                <Typography variant='h3'><Box pt={4} mb={4} textAlign='center'>Select Race</Box></Typography>


                    <Typography variant='h4'>
                    <Box>Strength: {strength}</Box>
                         <Box>Dexterity: {dexterity}</Box>
                          <Box>Constitution: {constitution}</Box>
                           <Box>Intelligence: {intelligence}</Box>
                            <Box>Wisdom: {wisdom}</Box>
                             <Box>Charisma: {charisma}</Box>
                        <Box onClick={()=>{
                        props.setStep(props.step + 1)
                        }} className='buttonHover' textAlign='center'>Done</Box></Typography>
                
            </Box>
        )
    }
    else if (props.step === 4) {
        return(
            <Box mt={6} borderTop='1px solid black'>
                <Typography variant='h3'><Box pt={4} mb={4} textAlign='center'>Explain your character</Box></Typography>


                    <Typography variant='h4'>
                        <TextField
                        placeholder='character description'
                        style={{
                            width: '100%',
                            height: '40vh',
                            borderTop: '2px solid black'
                        }}
                        multiline
                        rows='18'
                        onChange={e=>{setInfo(e.target.value)}}
                        value={info}
                        />
                        <Box onClick={()=>{
                        props.setStep(props.step + 1)
                        }} className='buttonHover' textAlign='center'>Done</Box>
                    </Typography>
                    
                
            </Box>
        )
    }
    else if(props.step === 5) {
        return(
        <Box mt={6} borderTop='1px solid black'>
                <Typography variant='h3'><Box pt={4} mb={4} textAlign='center'>Choose starting equipment (coming soon)</Box></Typography>


                <Typography variant='h4'>
                        <Box onClick={()=>{
                        props.setStep(props.step + 1)
                        }} className='buttonHover' textAlign='center'>Done</Box>
                    </Typography>
                    
                
            </Box>
        )}
        else if(props.step === 6) {
            return(
            <Box mt={6} borderTop='1px solid black'>
                    <Typography variant='h3'><Box pt={4} mb={4} textAlign='center'>Your info</Box></Typography>
    
    
                    <Typography variant='h4'>
                    <Box>Race: {race}</Box>
                    <Box>class: {classs}</Box>
                    <Box>Stats: <ul>
                                <li>strength: {strength}</li>
                                <li>dexterity: {dexterity}</li>
                                <li>constitution: {constitution}</li>
                                <li>intelligence: {intelligence}</li>
                                <li>wisdom: {wisdom}</li>
                                <li>charisma: {charisma}</li></ul></Box>
            <Box>Your Backstory: {info}</Box>
                            <Box onClick={()=>{
                            alert('Not finished')
                            }} className='buttonHover' textAlign='center'>Done</Box>
                        </Typography>
                        
                    
                </Box>
            )}
}


export default function (props) {
    let data = props.state.scrollData
    let [email, setEmail] = useState(null)
    let [step, setStep] = useState(0)

    return (
        <Slide
            in={props.state.openChar}
            timeout={750}
            direction='down'
        >
            <Grid id='scrollModal'>
                <Box onClick={props.closeScroll} id='scrollLeft'>

                </Box>
                <Box>
                    <Box pb={12} id='openScroll'>
                        <Grid container direction='column' justify='center'>
                            <Typography variant='h3'><Box pl={4} pr={4} pt={12} textAlign='center'>{email === null ? 'Start with your email or username(remember this for later)' : `Welcome ${email}`}</Box></Typography>
                            <StepRender step={step} setStep={setStep} email={email} setEmail={setEmail}/>
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