import {Container, Logo, Titulo, Texto, Resultado} from '../styles'
import React, { useEffect, useState } from 'react'
import logo from '../img/logo.jpg'
import Result from '../components/result'
import Input from '../components/input'

function Home() {

    //SETANDO USE STATES INICIAIS E LÓGICA
    const [inputBin, setInputBin] = useState({
        value: '',
        binary: false,
      })
      const [decNum, setDecNum] = useState()
    
      useEffect(() => {
        if (inputBin.value.length > 0 && inputBin.binary) {
          setDecNum(convertToDec(inputBin.value))
        } else if (inputBin.value.length === 0) {
          setDecNum('')
        }
      }, [inputBin])

// FÓRMULA CONVERSÃO 
    const convertToDec = (num) => {
        let convertedNum = 0
        num
          .split('')
          .reverse()
          .map((item, index) => {
            return item === '1' && (convertedNum += Math.pow(2, index))
          })
        return convertedNum
      }

// CHECAGEM BINÁRIO
const regExpNotBin = /[^01]/;

const handleBinaryInput = (e) => {
    const { value } = e.target
    setInputBin({ value, binary: !regExpNotBin.test(value) })
  }

// FUNÇÃO PARA RESPOSTA DE ERROU / SUCESSO
const Alert = () => {
    if (inputBin.value.length > 0) {
      if (!inputBin.binary) {
        return (
          <span className="alertSize" style={{ color: '#e74c3c', fontWeight: 'bold' }}>
            Você digitou um número não binário.
          </span>
        )
      } else if (inputBin.binary) {
        return (
          <span className="alertSize" style={{ color: '#27ae60', fontWeight: 'bold' }}>
            Aqui está seu resultado
          </span>
        )
      } else {
        return ' '
      }
    }
    return null
  }




return (
<Container className="App">

<Logo src={logo} /> <br />
<Titulo>Bin 2 Dec</Titulo>
<Texto>Digite o número binário:</Texto>
<p> <Alert /> </p>
<Input inputBin={inputBin} handleBinaryInput={handleBinaryInput} />
<Resultado>Resultado: </Resultado>
<Result inputBin={inputBin} decNum={decNum} />
</Container>
)}

export default Home;