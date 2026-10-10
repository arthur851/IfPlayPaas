import { Link, useLocation } from "react-router-dom"
export default function Resultado({ pontuacao: pontuacaoProp, totalPerguntas: totalProp }){
    const location = useLocation()
    const pontuacao = pontuacaoProp ?? location.state?.pontuacao ?? 0
    const totalPerguntas = totalProp ?? location.state?.totalPerguntas ?? 0
    return(
        <section className="pagina resultado">
            <h1>Resultado do jogo</h1>
            <h2>{pontuacao} pontos</h2>
            <p>Perguntas respondidas: {totalPerguntas}</p>
            <Link className="botao" to="/dashboard">Voltar ao painel</Link>
            <Link className="botao secundario" to="/ranking">Ver ranking</Link>
        </section>
    )
}