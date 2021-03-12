import React, { useState } from 'react';
import styled from 'styled-components';
import { ActionButtonSecundary } from '../../components/actionButton';
import { CardUser } from '../../components/cardUser'
import { Link } from 'react-router-dom'

const Root = styled.div`
  height: 100vh;
  background: #6C7A89;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const Box = styled.div`
    height: 80%;
    width: 80%;
    padding: 5vh;
    border-radius: 5px;
    background: #fff;
    overflow: auto;
`
const TittleHeader = styled.h1`
  color: rgb(68, 68, 68);
`

export function UserList(props) {

    // return users localStorage

    const usersLocal = localStorage.getItem('users');
    const jsonUsersLocal = JSON.parse(usersLocal);

    return (
        <Root>
            <Box>
                <TittleHeader> Lista de Usuários
                </TittleHeader>
                <div>
                    <Link to="/create-edit/create">
                        <ActionButtonSecundary onClick={() => ""} type="text" text="Create User" ></ActionButtonSecundary>
                    </Link>
                </div>
                {
                    jsonUsersLocal !== null &&
                    jsonUsersLocal.map((user) => (
                        <CardUser {...user}> </CardUser>
                    ))}
            </Box>
        </Root>
    )
}

export default UserList