import React, { Component } from 'react';
import styled from 'styled-components'

const ButtonPrimary = styled.button`
  width: 272px;
  height: 48px;
  background: rgb(240, 94, 92);
  border-radius: 4px;
  border: none;
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-weight: bold;
  line-height: 24px;
  text-align: center;
  margin-top: 7%;
  outline:none;
  &:hover {
    background: #c25151;
  }
`

const ButtonSecundary = styled.button`
  background: rgb(255, 255, 255);
  border-radius: 4px;
  color: #f05e5c;
  margin-left: 2%;
  font-size: 16px;
  font-weight: bold;
  border:none;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.16);
  line-height: 24px;
  text-align: center;
  outline:none;
  padding: 1vh 4vh;
  &:hover {
    background: #fdefee;
  }
`
export function ActionButton({ type, text }) {
  return (
      <ButtonPrimary type={type}> {text} </ButtonPrimary>
  )
}

export function ActionButtonSecundary({ type, text, onClick }) {
  return (
      <ButtonSecundary onClick={() => { onClick() }} type={type}> {text} </ButtonSecundary>
  )
}