import React, { Component, useEffect } from 'react';
import styled from 'styled-components'
import { ActionButtonSecundary } from '../../components/actionButton';
import { Link } from 'react-router-dom'

const UserContainer = styled.div`
	background-color: #fff;
	border-radius: 10px;
	box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
	display: flex;
	max-width: 100%;
	margin: 20px;
	overflow: hidden;
	width: 80%;
`
const UserInfo = styled.div`
    padding: 30px;
    position: relative;
    width: 100%;
`

const DivButton = styled.div`
  margin: 0 auto;
  text-align: right;
`

const TableUsers = styled.table`
    border-radius: 3px;
`

const ColumnTable = styled.th`
  padding: 9px 49% 8px 6px;
  text-align: left;
  border-bottom: 1px solid #e7e7e7;
  color: rgb(68, 68, 68);
`
const InfoUser = styled.td`
  padding: 6px 19vh 6px 0vh;
  border-bottom: 1px solid #e7e7e7;
  text-align: left;
`

export function CardUser({ name, cpf, phone, email }) {

    function RemoveUsers(item) {

        const usersLocal = localStorage.getItem('users');

        const jsonUsersLocal = JSON.parse(usersLocal);

        const returnNewDataUser = jsonUsersLocal.filter(user => user.cpf !== item)

        localStorage.setItem('users', JSON.stringify(returnNewDataUser))

        window.location.reload();
    }

    const usersLocal = localStorage.getItem('users');

    if (usersLocal == null) {
        window.location.reload();
    }


    return (
        <div>
            <UserContainer>
                <UserInfo>
                    <DivButton>
                        <Link to={{ pathname: `/create-edit/${cpf}` }}>
                            <ActionButtonSecundary onClick={() => ""}  type="text" text="Edit" ></ActionButtonSecundary>
                        </Link>
                        <ActionButtonSecundary onClick={() => { RemoveUsers(cpf) }} type='button' text='Excluir' ></ActionButtonSecundary>
                    </DivButton>
                    <TableUsers>
                        <tr>
                            <ColumnTable>Name:</ColumnTable>
                            <InfoUser> {name} </InfoUser>
                        </tr>
                        <tr>
                            <ColumnTable>CPF:</ColumnTable>
                            <InfoUser> {cpf} </InfoUser>
                        </tr>
                        <tr>
                            <ColumnTable>Telefone:</ColumnTable>
                            <InfoUser> {phone} </InfoUser>
                        </tr>
                        <tr>
                            <ColumnTable>e-mail:</ColumnTable>
                            <InfoUser> {email} </InfoUser>
                        </tr>
                    </TableUsers>
                </UserInfo>
            </UserContainer>
        </div>
    )
}