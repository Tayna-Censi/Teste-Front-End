import React, { Component } from 'react';
import styled from 'styled-components'

const StyledDiv = styled.div `
  display: flex;
  width: 100vw;
  height: 44px;
  align-items: center;
  border-bottom: 1px solid grey;
  justify-content: center;
  background-color: white;
  img {    
    width: 23px;
    height: 24px;
    position: absolute;
    left: 16px;
  }
`

const StyledP = styled.p `
  height: 19px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;  
  text-align: center;
  color: #000000;
  background-color: white;
`

export function HeaderNav(props) {
    return (
        <StyledDiv>          
          <StyledP>{props.menuText} </StyledP>
        </StyledDiv>
      )
}