import { useState } from "react"
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
    const [quizzes,setQuizzes] = useState([])
    const [quizAtivo,setQuizAtivo] = useState(null)
    const [usuario,setUsuario] = useState(null)
    const [historico,setHistorico] = useState([])
    const [jogadores,setJogadores] = useState([])
    function criarQuiz(quiz){
        setQuizzes(anterior=>[...anterior,quiz])
        setQuizAtivo(quiz)
    }
    function salvarPergunta(pergunta){
        setQuizAtivo(anterior=>{
            if(!anterior) return anterior
            const atualizado = { ...anterior, perguntas: [...anterior.perguntas,pergunta] }
            setQuizzes(lista=>lista.map(quiz=>quiz.id===atualizado.id?atualizado:quiz))
            return atualizado
        })
    }
    function responder(resultado){
        if(!resultado.correta) return
        setHistorico(anterior=>[...anterior])
    }
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/" element={<Inicio/>}/>
                    <Route path="/login" element={<Login onLogin={setUsuario}/>}/>
                    <Route path="/cadastro" element={<Cadastro onCadastrar={setUsuario}/>}/>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route path="/criar-quiz" element={<CriarQuiz onCriarQuiz={criarQuiz}/>}/>
                    <Route path="/adicionar-perguntas" element={<AdicionarPerguntas onSalvarPergunta={salvarPergunta}/>}/>
                    <Route path="/entrar-jogo" element={<EntrarJogo/>}/>
                    <Route path="/sala-espera" element={<SalaEspera participantes={jogadores}/>}/>
                    <Route path="/jogar" element={<Jogar perguntas={quizAtivo?.perguntas ?? []} onResponder={responder}/>}/>
                    <Route path="/resultado" element={<Resultado/>}/>
                    <Route path="/recuperar-senha" element={<RecuperarSenha/>}/>
                    <Route path="/meus-quizzes" element={<MeusQuizzes quizzes={quizzes}/>}/>
                    <Route path="/visualizar-quiz/:id" element={<VisualizarQuiz quizzes={quizzes}/>}/>
                    <Route path="/perfil" element={<Perfil usuario={usuario ?? {}} onAtualizarPerfil={setUsuario}/>}/>
                    <Route path="/historico" element={<Historico historico={historico}/>}/>
                    <Route path="/ranking" element={<Ranking jogadores={jogadores}/>}/>
                    <Route path="/configuracoes" element={<Configuracoes/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}