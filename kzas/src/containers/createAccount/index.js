import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ActionButton } from '../../components/actionButton';
import { ActionButtonSecundary } from '../../components/actionButton';
import { InputPhone } from '../../components/inputPhone';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";

const Root = styled.div`
  width: 100vw;
  height: 100vh;
  background: #6C7A89;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const Box = styled.div`
  width: 48%;
  height: 80%;
  padding: 5vh;
  border-radius: 5px;
  background: #fff;
`

const HeaderText = styled.h6`
  text-align: center;
  color: rgb(68, 68, 68);
  font-size: 20px;
  font-weight: bold;
  line-height: 32px;
`

const DivButton = styled.div`
  margin: 0 auto;
  text-align: center;
`

const FormUser = styled.form`
  margin: 0 auto;
  text-align: center;
`

const StyledTextField = styled.input`
    border: ${props => props.error ? "1px solid #a50000;" : "1px solid #e7e7e7"};
    background-color: ${props => props.error ? "#faf0f0;" : "white"};
    pointer-events: ${props => props.edit ? "none" : "true"};
    height: 40px;
    color: rgb(148, 148, 148);
    font-size: 14px;
    border-radius: 4px;
    font-weight: normal;
    margin: 3%;
    width: 272px;
    padding-left: 12px;
    &:focus {
        border-radius: 4px;
        outline-color: #41a5bb;
    }
    ::placeholder,
    ::-webkit-input-placeholder {
        color: rgb(148, 148, 148);
        font-size: 14px;
        font-weight: normal;
        height: 20px;
        line-height: 20px;
        width: 248px;
    }
`;

export function User(props) {

    const [name, setUsername] = useState("")
    const [cpf, setCPF] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [errorName, setErrorName] = useState("")
    const [errorCpf, setErrorCpf] = useState("")
    const [errorEmail, setErrorEmail] = useState("")
    const [edit, setEdit] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        if (errorName) {
            alert("Preencha corretamente os campos")
            return;
        }

        if (errorCpf) {
            alert("Preencha corretamente os campos")
            return
        }

        if(edit) {
            const objUser = UpdateJsonUsers()
            if (objUser === false) {
                alert("Preencha corretamente os campos")
                return
            }
        }

        else {
            const objUser = IcludeJsonUsers();
            if (objUser === false) {
                alert("Preencha corretamente os campos")
                return
            }
        }

        alert("Concluido!")

        //window.location.reload();
    }

    const UpdateJsonUsers = () => {
        const usersLocal = localStorage.getItem('users');
    
        const jsonUsersLocal = JSON.parse(usersLocal);
    
        const returnNewDataUser = jsonUsersLocal.findIndex(user => user.cpf === cpf)

        jsonUsersLocal[returnNewDataUser].name = name;
        jsonUsersLocal[returnNewDataUser].phone = phone;
        jsonUsersLocal[returnNewDataUser].email = email;
    
        localStorage.setItem('users', JSON.stringify(jsonUsersLocal))
    }
        
    const IcludeJsonUsers = () => {

        // return users localStorage
        const usersLocal = localStorage.getItem('users');

        const jsonUsersLocal = JSON.parse(usersLocal);

        // Checa se já existe o cpf nos usuários cadastrados local
        const cpfExiste = jsonUsersLocal.some(cpfList => cpfList.cpf === { cpf })

        if (cpfExiste) {
            return false;
        }

        jsonUsersLocal[jsonUsersLocal.length] = {
            name: name, cpf: cpf, phone: phone,
            email: email
        }

        localStorage.setItem('users', JSON.stringify(jsonUsersLocal))
    }

    const Validation = (field) => {
        if (field === "name") {
            if (!isNaN(name)) {
                setErrorName(true);
            }
            else {
                setErrorName(false);
            }
        }
        if (field === "cpf") {
            if (isNaN(cpf)) {
                setErrorCpf(true);
            }
            else if (cpf.length !== 11) {
                setErrorCpf(true);
            }
            else {
                setErrorCpf(false);
            }
        }
        if (field === "email") {
            if (!isNaN(email)) {
                setErrorEmail(true);
            }
            else {
                setErrorName(false);
            }
        }
    }

    const id = useParams();
    const cpfUserEdit = id.id;

    useEffect(() => {
        if (cpfUserEdit !== "create") {
            const usersLocal = localStorage.getItem('users');

            const jsonUsersLocal = JSON.parse(usersLocal);

            const returnDataUser = jsonUsersLocal.filter(user => user.cpf === cpfUserEdit)

            if (returnDataUser.length > 0) {
                setUsername(returnDataUser[0].name)
                setCPF(returnDataUser[0].cpf)
                setPhone(returnDataUser[0].phone)
                setEmail(returnDataUser[0].email)
            }

            setEdit(true)
        }
    }, [cpfUserEdit])

    return (
        <Root>
            <Box>
                <Link to="/">
                    <ActionButtonSecundary onClick={() => ""} type="" text="Voltar"></ActionButtonSecundary>
                </Link>
                <HeaderText>
                    Create Account
                </HeaderText>

                <FormUser
                    autoComplete="off"
                    onSubmit={handleSubmit}
                >
                    <StyledTextField
                        //Nome
                        id="outlined-size-normal"
                        name="name"
                        placeholder="Nome"
                        onBlur={() => { Validation("name") }}
                        onChange={(event) => { setUsername(event.target.value) }}
                        value={name}
                        error={errorName}
                    />
                    <StyledTextField
                        //CPF
                        id="outlined-size-normal"
                        placeholder="CPF"
                        name="cpf"
                        onBlur={() => { Validation("cpf") }}
                        onChange={(event) => { setCPF(event.target.value) }}
                        value={cpf}
                        error={errorCpf}
                        edit={edit}
                    />

                    <InputPhone onBlur={(value) => { setPhone(value) }} phone={phone} onChange={(value) => { setPhone(value) }}></InputPhone>

                    <StyledTextField
                        //Email
                        id="outlined-size-normal"
                        placeholder="Email"
                        name="email"
                        type="email"
                        onChange={(event) => { setEmail(event.target.value) }}
                        value={email}
                        error={errorEmail}
                    />
                    <DivButton>
                        <ActionButton type="submit" text="Salvar" />
                    </DivButton>
                </FormUser>
            </Box>
        </Root>
    )
}

export default User