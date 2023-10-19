import React, { useEffect, useState } from 'react'
import Header from '../../header/Header'
import Footer from '../../footer/Footer'
import '../CadastroUsuarios.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

const CadFuncionario = () => {
    const [funcionariosCadastrados, setFuncionariosCadastrados] = useState([])
    const [nome, setNome] = useState()
    const [matriculaSIAPE, setMatriculaSIAPE] = useState()
    const [emailInformado, setEmailInformado] = useState()
    const [senha, setSenha] = useState()
    const [confirmarSenha, setConfirmarSenha] = useState()
    const [mensagem, setMensagem] = useState('');

    useEffect(() => {
        pegarValoresFuncionarios()
    }, [])

    const pegarValoresFuncionarios = async () => {
        try {
            const response = await axios.get('http://localhost:5000/users')
            if (response.status === 200) {
                const funcionariosData = response.data
                setFuncionariosCadastrados(funcionariosData)
            }
        } catch (error) {
            console.error('Erro ao pegar valores:', error);
        }
    }
    const generateToken = () => {
        const tokenLength = 25; // You can adjust the length of the token as needed
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let token = '';
        for (let i = 0; i < tokenLength; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            token += characters[randomIndex];
        }
        return token;
    }

    const handleFuncionario = async (e) => {
        e.preventDefault()
        if (senha !== confirmarSenha) {
            setMensagem('Verifique suas senhas e tente novamente.');
            setSenha('');
            setConfirmarSenha('');
            return;
        }

        if (matriculaSIAPE.length !== 8) {
            setMensagem('Número da matrícula deve ter 8 caracteres');
            return;
        }

        const existeFuncionarioComMatricula = funcionariosCadastrados.some(({ matricula }) => matricula === matriculaSIAPE);

        if (existeFuncionarioComMatricula) {
            setMensagem('Matricula já cadastrada!');
            return;
        }

        const existeFuncionarioComEmail = funcionariosCadastrados.some(({ email }) => email === emailInformado);

        if (existeFuncionarioComEmail) {
            setMensagem('Email já cadastrado!');
            return;
        }

        try {
            const token = generateToken();
            const response = await axios.post('http://localhost:5000/users', {
                matricula: matriculaSIAPE,
                name_user: nome,
                email: emailInformado,
                password: senha,
                aluno: false,
                token: token
            })
            if (response.status === 201) {
                setMensagem('Usuário cadastrado com sucesso!');
                setEmailInformado('');
                setSenha('');
                setConfirmarSenha('')
                setNome('')
                setMatriculaSIAPE('')
                pegarValoresFuncionarios()
            }
        } catch (error) {
            console.error('Erro ao cadastrar usuário:', error);
            setMensagem('Erro ao cadastrar usuário. Tente novamente mais tarde.');
        }
    }

    return (
        <React.Fragment>
            <Header titulo={"Cadastrar Funcionário"} link={'/login'}/>
            <main>
                <section className='cadastroUsuario'>
                    <form>
                        <input type="text" value={nome} onChange={e => setNome(e.target.value)} className='informacoesCadastro' placeholder='Nome' />
                        <input type="text" value={matriculaSIAPE} onChange={e => setMatriculaSIAPE(e.target.value)} className='informacoesCadastro' placeholder='Matrícula SIAPE' />
                        <input type="text" value={emailInformado} onChange={e => setEmailInformado(e.target.value)} className='informacoesCadastro' placeholder='Email' />
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