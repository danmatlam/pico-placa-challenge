import React from 'react'
import styled from 'styled-components';

const Placa = ({ placa }) => {
    const placaStr = placa.substring(0, placa.length - 1)
    const placaEnding = placa.charAt(placa.length - 1)

    return (


            <Container>
            <PlacaBox>
                <Title>ECUADOR</Title>
                <PlacaText>
                    {placaStr}<span style={{color:'red'}}>{placaEnding}</span>
                </PlacaText>
                
            </PlacaBox>
        </Container>
        
        
       

    )
}

export default Placa

const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    padding:.9em;
`


const PlacaBox = styled.div`
    display:flex;
    flex-direction:column;
    text-align: center;
    border-radius:12px;
    

    @media only screen and  (min-width: 0)   and (max-width: 480px)  {
        width:60%;
    }
    @media only screen and  (min-width: 480px)   and (max-width: 576px)  {
        width:60%;
    }
    @media only screen and  (min-width: 576px)   and (max-width: 768px)  {
        width:60%;
    }
    @media only screen and  (min-width: 768px)    {
        width:60%;
    }

     
`



const Title = styled.span`
  border-radius:9px 9px 0 0;
  flex:1;
  font-size: .9rem;
  background-color:#000000;
  border: 3px solid #000000;
  color:#ffffff;
  padding:.21rem;
`;


const PlacaText = styled.span`
  border-radius:0 0 9px 9px;
  flex:3;
  font-size: 1.8rem;
  background-color:#fafafc;
  border-bottom: 3px solid #000000;
  border-left: 3px solid #000000;
  border-right: 3px solid #000000;
  padding:.21em;

`;

