import React, { useState } from 'react'

import TextField from '@material-ui/core/TextField'

import './styles.css'

const Form = () =>{

    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')

    return(
        <div id="form"><br/>
            <h1>PCC - Sistema de gerenciamento de eventos esportivos</h1><br/>

            <div className="inputs">
                <TextField 
                    id="email" 
                    label="Email" 
                    variant="outlined"
                    className='email-input'
                    size='small'
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
                />
                <br/>
                <TextField 
                    id="senha" 
                    label="Senha" 
                    variant="outlined" 
                    type='password'
                    className='email-input'
                    size='small'
                    value={password}
                    onChange={e=>setPassword(e.target.value)}
                />
            </div>

            <button className='button1'>
                Entrar
            </button>

            <strong>Esquceu sua senha?</strong>
            <p className='clique-aqui'>Clique aqui</p>

            <p className='create-account'>Caso ainda não tenha conta</p><br/>

            <button className='button2'> Cadastre-se</button>

        </div>
    )
}

export default Form