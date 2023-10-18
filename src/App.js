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
import ViewCardapio from './components/alunos/visualizacoes/cardapio/ViewCardapio';
import AvaliarTipo from './components/alunos/avaliacoes/AvaliarTipo';
import AvaliarDia from './components/alunos/avaliacoes/AvaliarDia';
import AvaliarDiaJantar from './components/alunos/avaliacoes/AvaliarDiaJantar';
import VisualizarFeedbacks from './components/alunos/visualizacoes/feedbacks/VisualizarFeedbacks';
import NovoPrato from './components/alunos/recomendacoes/NovoPrato';
import Recomendacoes from './components/funcionario/recomendacoes/Recomendacoes';
import EditarJanta from './components/funcionario/edicao/EditarJanta';



function App() {

  return (

    <Router>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route path='*' element={<Login />} />
        <Route path='/cadastro' element ={ <OpcoesCadastro />}/>
        <Route path='/cadAluno' element={<CadAluno />} />
        <Route path='/HomeAluno' element={<Home />} />
        <Route path='/Homealuno/RealizarFeedback' element={<AvaliarTipo />} />
        <Route path='/Homealuno/RealizarFeedback/Almoco' element={<AvaliarDia />} />
        <Route path='/Homealuno/RealizarFeedback/Jantar' element={<AvaliarDiaJantar />} />
        <Route path='/Homealuno/RealizarFeedback/Almoco/:tipo/:dia' element={<AvaliarComida/>} />
        <Route path='/Homealuno/RealizarFeedback/Jantar/:tipo/:dia' element={<AvaliarComida/>} />
        <Route path='/Homealuno/VisualizarCardapio' element={<ViewCardapio/>} />
        <Route path='/Homealuno/VisualizarFeedbacks/:tipo' element={<VisualizarFeedbacks/>} />
        <Route path='/Homealuno/SugerirPrato' element={<NovoPrato/>} />




        <Route path='/cadFuncionario' element={<CadFuncionario />} />
        <Route path='/HomeFuncionario' element={<HomeFuncionario />} />
        <Route path='/HomeFuncionario/CadastrarCardapio' element={<FormCardapio/>} />
        
        <Route path='/HomeFuncionario/CadastrarCardapio/Almoco/' element={<EscolhaDia/>} />
        <Route path='/HomeFuncionario/VisualizarFeedbacks/:tipo' element={<VisualizarFeedbacks/>} />
        <Route path='/HomeFuncionario/CadastrarCardapio/Almoco/:dia' element={<FormAlmoco/>} />

        <Route path='/HomeFuncionario/CadastrarCardapio/Jantar/' element={<EscolhaDiaJanta/>} />
        <Route path='/HomeFuncionario/CadastrarCardapio/Jantar/:dia' element={<FormJanta/>} />

        <Route  path='/HomeFuncionario/EditarCardapio' element={<OpcoesEdicao/>} />
        <Route  path='/HomeFuncionario/EditarCardapio/Almoco' element={<EscolhaDiaAlmoco/>} />
        <Route  path='/HomeFuncionario/EditarCardapio/Almoco/:dia' element={<EditarAlmoco/>} />
        <Route  path='/HomeFuncionario/EditarCardapio/Jantar' element={<EscolhaDiaJanta/>} />
        <Route  path='/HomeFuncionario/EditarCardapio/Jantar/:dia' element={<EditarJanta/>} />
        <Route path='/HomeFuncionario/VisualizarSugestoes' element={<Recomendacoes />} />

      </Routes>
    </Router>

  );
}

export default App;