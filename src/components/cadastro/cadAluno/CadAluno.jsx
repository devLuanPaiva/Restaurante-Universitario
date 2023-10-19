import React, { useEffect, useState } from 'react'
import Header from '../../header/Header'
import Footer from '../../footer/Footer'
import '../CadastroUsuarios.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

const CadAluno = () => {
    const [alunosCadastrados, setAlunosCadastrados] = useState([])
    const [nome, setNome] = useState()
    const [matriculaInformada, setMatriculaInformada] = useState()
    const [emailInformado, setEmailInformado] = useState()
    const [senha, setSenha] = useState()
    const [confirmarSenha, setConfirmarSenha] = useState()
    const [mensagem, setMensagem] = useState('');

    useEffect(() => {
        pegarValoresAlunos()
    }, [])

    const pegarValoresAlunos = async () => {
        try {
            const response = await axios.get('http://localhost:5000/users')
            if (response.status === 200) {
                const alunosData = response.data
                setAlunosCadastrados(alunosData)
            }
        } catch (error) {
            console.error('Erro ao pegar valores:', error);
        }
    }

    const generateToken = () => {
        const tokenLength = 25; 
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let token = '';
        for (let i = 0; i < tokenLength; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            token += characters[randomIndex];
        }
        return token;
    }
    const handleAluno = async (e) => {
        e.preventDefault();

        if (senha !== confirmarSenha) {
            setMensagem('Verifique suas senhas e tente novamente.');
            setSenha('');
            setConfirmarSenha('');
            return;
        }

        if (matriculaInformada.length !== 10) {
            setMensagem('Número da matrícula deve ter 10 caracteres');
            return;
        }

        const existeAlunoComMatricula = alunosCadastrados.some(({ matricula }) => matricula === matriculaInformada);

        if (existeAlunoComMatricula) {
            setMensagem('Matricula já cadastrada!');
            return;
        }

        const existeAlunoComEmail = alunosCadastrados.some(({ email }) => email === emailInformado);

        if (existeAlunoComEmail) {
            setMensagem('Email já cadastrado!');
            return;
        }



        try {
            const token = generateToken();
            const response = await axios.post('http://localhost:5000/users', {
                matricula: matriculaInformada,
                name_user: nome,
                email: emailInformado,
                password: senha,
                aluno: true,
                token: token
            });

            if (response.status === 201) {
                setMensagem('Usuário cadastrado com sucesso!');
                setEmailInformado('');
                setSenha('');
                setConfirmarSenha('');
                setNome('');
                setMatriculaInformada('');
                pegarValoresAlunos()
            }
        } catch (error) {
            console.error('Erro ao cadastrar usuário:', error);
            setMensagem('Erro ao cadastrar usuário. Tente novamente mais tarde.');
        }
    };

    return (
        <React.Fragment>
            <Header titulo={"Cadastrar Aluno"} link={'/login'} />
            <main>
                <section className='cadastroUsuario'>
                    <form>
                        <input type="text" value={nome} onChange={e => setNome(e.target.value)} className='informacoesCadastro' placeholder='Nome' />
                        <input type="text" value={matriculaInformada} onChange={e => setMatriculaInformada(e.target.value)} className='informacoesCadastro' placeholder='Matrícula' />
                        <input type="text" value={emailInformado} onChange={e => setEmailInformado(e.target.value)} className='informacoesCadastro' placeholder='Email' />
                        <input type="password" value={senha} onChange={e => setSenha(e.target.value)} className='informacoesCadastro' placeholder='Senha' />
                        <input type="password" value={confirmarSenha} onChange={e => setConfirmarSenha(e.target.value)} className='informacoesCadastro' placeholder='Confirmar Senha' />
                    </form>
                    <div className="opcoesFinais">
                        <Link to={'/login'} id='cancel'>Cancelar</Link>
                        <button id='cad' onClick={handleAluno}>Cadastrar</button>
                    </div>
                    <p>{mensagem}</p>
                </section>
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default CadAluno