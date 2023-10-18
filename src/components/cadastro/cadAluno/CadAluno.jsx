import React, { useState } from 'react'
import Header from '../../header/Header'
import Footer from '../../footer/Footer'
import '../CadastroUsuarios.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

const CadAluno = () => {
    const [nome, setNome] = useState()
    const [matricula, setMatricula] = useState()
    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()
    const [confirmarSenha, setConfirmarSenha] = useState()
    const [mensagem, setMensagem] = useState('');

    const handleAluno = async (e) => {
        e.preventDefault()
        if (senha === confirmarSenha) {

            try {
                const response = await axios.put('http://localhost:5000/users', {
                    matricula: matricula,
                    name_user: nome,
                    email: email,
                    password: senha,
                    aluno: true
                })
                if (response.status === 200) {
                    setMensagem('Usuário cadastrado com sucesso!');
                    setEmail('');
                    setSenha('');
                    setConfirmarSenha('')
                    setNome('')
                    setMatricula('')
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
            <Header titulo={"Cadastrar Aluno"}link={'/login'}/>
            <main>
                <section className='cadastroUsuario'>
                    <form>
                        <input type="text" value={nome} onChange={e => setNome(e.target.value)} className='informacoesCadastro' placeholder='Nome' />
                        <input type="text" value={matricula} onChange={e => setMatricula(e.target.value)} className='informacoesCadastro' placeholder='Matrícula' />
                        <input type="text" value={email} onChange={e => setEmail(e.target.value)} className='informacoesCadastro' placeholder='Email' />
                        <input type="password" value={senha} onChange={e => setSenha(e.target.value)} className='informacoesCadastro' placeholder='Senha' />
                        <input type="password" value={confirmarSenha} onChange={e => setConfirmarSenha(e.target.value)} className='informacoesCadastro' placeholder='Confirmar Senha' />
                    </form>
                    <div className="opcoesFinais">
                        <Link  to={'/login'} id='cancel'>Cancelar</Link>
                        <button  id='cad' onClick={handleAluno}>Cadastrar</button>
                    </div>
                    <p>{mensagem}</p>
                </section>
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default CadAluno