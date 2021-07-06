import styled from 'styled-components'

export const Container = styled.div `
    width: 100%;
    height: 100%;
    background-color: black;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Logo = styled.img`
width: 25%;
margin-bottom: 1rem;
`

export const InputStyle = styled.input`
    padding: 5px;
    border: 2.5px solid #2ecc71;
    border-radius: 9px;
    width: 20rem;
    height: 2.2rem;
    margin-bottom: 0.5rem;
    background: white;
    font-size: 24px;
    color: black;
    text-align: center;
`

export const Titulo = styled.text`
    font-color: white;
    width: 30rem;
    text-align: center;
    height: 3rem;
    justify-content: center;
    font-size: 50px;
    color: white;
    margin: 0.8rem;
`

export const Texto = styled.text`
font-color: white;
width: 20rem;
text-align: center;
height: 3rem;
justify-content: center;
font-size: 25px;
color: white;
`

export const Button = styled.button`
    width: 8rem;
    text-align: center;
    height: 2rem;
    font-size: 20px;
`

export const Resultado = styled.text`
font-color: white;
width: 20rem;
text-align: center;
height: 3rem;
justify-content: center;
font-size: 25px;
color: white;
margin-top: 3rem;`

export const Display = styled.text`
font-color: white;`