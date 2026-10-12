import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Inicio from "./pages/Inicio"
import Login from "./pages/Login"
import Cadastro from "./pages/Cadastro"
import Dashboard from "./pages/Dashboard"
import CriarQuiz from "./pages/CriarQuiz"
import AdicionarPerguntas from "./pages/AdicionarPerguntas"
import EntrarJogo from "./pages/EntrarJogo"
import SalaEspera from "./pages/SalaEspera"
import Jogar from "./pages/Jogar"
import Resultado from "./pages/Resultado"
import RecuperarSenha from "./pages/RecuperarSenha"
import MeusQuizzes from "./pages/MeusQuizzes"
import VisualizarQuiz from "./pages/VisualizarQuiz"
import Perfil from "./pages/Perfil"
import Historico from "./pages/Historico"
import Ranking from "./pages/Ranking"
import Configuracoes from "./pages/Configuracoes"
export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/" element={<Inicio/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/cadastro" element={<Cadastro/>}/>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route path="/criar-quiz" element={<CriarQuiz/>}/>
                    <Route path="/adicionar-perguntas" element={<AdicionarPerguntas/>}/>
                    <Route path="/entrar-jogo" element={<EntrarJogo/>}/>
                    <Route path="/sala-espera" element={<SalaEspera/>}/>
                    <Route path="/jogar" element={<Jogar/>}/>
                    <Route path="/resultado" element={<Resultado/>}/>
                    <Route path="/recuperar-senha" element={<RecuperarSenha/>}/>
                    <Route path="/meus-quizzes" element={<MeusQuizzes/>}/>
                    <Route path="/visualizar-quiz" element={<VisualizarQuiz/>}/>
                    <Route path="/perfil" element={<Perfil/>}/>
                    <Route path="/historico" element={<Historico/>}/>
                    <Route path="/ranking" element={<Ranking/>}/>
                    <Route path="/configuracoes" element={<Configuracoes/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}