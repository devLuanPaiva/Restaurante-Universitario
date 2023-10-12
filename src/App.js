import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/login/Login'
import Home from './components/alunos/home/Home';
import HomeFuncionario from './components/funcionario/home/HomeFuncionario';
import OpcoesCadastro from './components/cadastro/opcoes/OpcoesCadastro';
import CadAluno from './components/cadastro/cadAluno/CadAluno';
import CadFuncionario from './components/cadastro/cadFuncionario/CadFuncionario';
import FormCardapio from './components/funcionario/formCardapio/FormCardapio';
import FormAlmoco from './components/funcionario/formCardapio/FormAlmoco';
import FormJanta from './components/funcionario/formCardapio/FormJanta';
import AvaliarComida from './components/alunos/avaliacoes/AvaliarComida';
import EscolhaDia from './components/funcionario/formCardapio/EscolhaDia';
import EscolhaDiaJanta from './components/funcionario/formCardapio/EscolhaDiaJanta';
import OpcoesEdicao from './components/funcionario/edicao/OpcoesEdicao';
import EscolhaDiaAlmoco from './components/funcionario/edicao/EscolhaDiaAlmoco';
import EditarAlmoco from './components/funcionario/edicao/EditarAlmoco';



function App() {

  return (

    <Router>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route path='*' element={<Login />} />
        <Route path='/cadastro' element ={ <OpcoesCadastro />}/>
        <Route path='/cadAluno' element={<CadAluno />} />
        <Route path='/HomeAluno' element={<Home />} />
        <Route path='/HomeAluno/Avaliar' element={<AvaliarComida />} />

        <Route path='/cadFuncionario' element={<CadFuncionario />} />
        <Route path='/HomeFuncionario' element={<HomeFuncionario />} />
        <Route path='/HomeFuncionario/CadastrarCardapio' element={<FormCardapio/>} />
        
        <Route path='/HomeFuncionario/CadastrarCardapio/Almoco/' element={<EscolhaDia/>} />
        <Route path='/HomeFuncionario/CadastrarCardapio/Almoco/:dia' element={<FormAlmoco/>} />

        <Route path='/HomeFuncionario/CadastrarCardapio/Jantar/' element={<EscolhaDiaJanta/>} />
        <Route path='/HomeFuncionario/CadastrarCardapio/Jantar/:dia' element={<FormJanta/>} />

        <Route  path='/HomeFuncionario/EditarCardapio' element={<OpcoesEdicao/>} />
        <Route  path='/HomeFuncionario/EditarCardapio/Almoco' element={<EscolhaDiaAlmoco/>} />
        <Route  path='/HomeFuncionario/EditarCardapio/Almoco/:dia' element={<EditarAlmoco/>} />
        <Route  path='/HomeFuncionario/EditarCardapio/Jantar' element={<EscolhaDiaJanta/>} />
        <Route  path='/HomeFuncionario/EditarCardapio/Jantar/:dia' element={<EscolhaDiaJanta/>} />

      </Routes>
    </Router>

  );
}

export default App;