import {Container, Logo, Input, Titulo, Texto, Button} from '../styles'
import React from 'react'
import logo from '../img/logo.jpg'

const Home = () => {
return (
<Container className="App">
<Logo src={logo} /> <br />
<Titulo>Conversor binário: </Titulo>
<Texto>Digite o número binário:</Texto>
<Input type="text" />
<Button>Calcular</Button>


</Container>
)}

export default Home;