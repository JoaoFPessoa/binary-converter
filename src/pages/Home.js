import {Container, Logo, Input, Titulo, Texto, Button, Resultado, InputResult} from '../styles'
import React from 'react'
import logo from '../img/logo.jpg'


const Home = () => {
return (
<Container className="App">
<Logo src={logo} /> <br />
<Titulo>Conversor binário: </Titulo>
<Texto>Digite o número binário:</Texto>
<Input type="text"  placeholder="Somente 0 ou 1" />
<Button>Calcular</Button>
<Resultado>Resultado:</Resultado>
<InputResult />


</Container>
)}

export default Home;