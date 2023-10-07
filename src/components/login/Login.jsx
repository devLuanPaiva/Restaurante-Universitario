import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Header from '../header/Header'
import Footer from '../footer/Footer'
import './Login.css'


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [erro, setErro] = useState('')
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/users');
            const users = await response.json();

            const usuario = users.find(
                (user) => user.email === email && user.password === password
            );

            if (usuario) {
                if(usuario.aluno){
                    navigate('/homealuno')
                }else{
                    navigate('/homefuncionario')
                }
                
            } else {
                setErro('Credenciais inválidas. Tente novamente.');
            }
        } catch (error) {
            console.error('Erro ao autenticar:', error);
            setErro('Erro ao autenticar. Tente novamente mais tarde.');
        }

    }

    return (
        <React.Fragment>
            <Header link={'/'} />
            <main id="login">
                <div id="formulario">
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit} >
                        <div className='user-box'>
                            <input type="text" value={email} onChange={e => setEmail(e.target.value)} className="infoLogin" />
                            <label >Usuário</label>
                        </div>
                        <div className='user-box'>
                            <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="infoLogin" />
                            <label>Senha</label>
                        </div>
                        <input type="submit" value="ENTRAR" className="submit" />

                        <div>
                            <p className='descricao'>Ainda não tem cadastro? <Link to={'/cadastro'} id='cadastrar'>Cadastrar-se</Link> </p>
                        </div>

                    </form>
                    {erro && <div className="erro">{erro}</div>}
                </div>

            </main>
            <Footer />
        </React.Fragment>
    );
};

export default Login;