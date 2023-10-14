import React, { useState } from 'react'
import Header from '../../header/Header'
import Footer from '../../footer/Footer'
import '../CadastroUsuarios.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

const CadFuncionario = () => {
    const [nome, setNome] = useState()
    const [matriculaSIAPE, setMatriculaSIAPE] = useState()
    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()
    const [confirmarSenha, setConfirmarSenha] = useState()
    const [mensagem, setMensagem] = useState('');

    const handleFuncionario = async (e) => {
        e.preventDefault()
        if (senha === confirmarSenha) {
            try {
                const response = await axios.post('http://localhost:5000/users', {
                    matricula: matriculaSIAPE,
                    name_user: nome,
                    email: email,
                    password: senha,
                    aluno: false
                })
                if (response.status === 201) {
                    setMensagem('Usuário cadastrado com sucesso!');
                    setEmail('');
                    setSenha('');
                    setConfirmarSenha('')
                    setNome('')
                    setMatriculaSIAPE('')
                }
            } catch (error) {
                console.error('Erro ao cadastrar usuário:', error);
                setMensagem('Erro ao cadastrar usuário. Tente novamente mais tarde.');
            }
        } else {
            setMensagem(' Verifique suas senhas e tente novamente.')
            setSenha('');
            setConfirmarSenha('')
        }
    }
    return (
        <React.Fragment>
            <Header titulo={"Cadastrar Funcionário"}/>
            <main>
                <section className='cadastroUsuario'>
                    <form>
                        <input type="text" value={nome} onChange={e => setNome(e.target.value)} className='informacoesCadastro' placeholder='Nome' />
                        <input type="text" value={matriculaSIAPE} onChange={e => setMatriculaSIAPE(e.target.value)} className='informacoesCadastro' placeholder='Matrícula SIAPE' />
                        <input type="text" value={email} onChange={e => setEmail(e.target.value)} className='informacoesCadastro' placeholder='Email' />
                        <input type="password" value={senha} onChange={e => setSenha(e.target.value)} className='informacoesCadastro' placeholder='Senha' />
                        <input type="password" value={confirmarSenha} onChange={e => setConfirmarSenha(e.target.value)} className='informacoesCadastro' placeholder='Confirmar Senha' />
                    </form>
                    <div className="opcoesFinais">
                    <Link to={'/login'} id='cancel'>Cancelar</Link>
                        <button id='cad' onClick={handleFuncionario}>Cadastrar</button>
                    </div>
                    <p>{mensagem} </p>
                </section>
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default CadFuncionario