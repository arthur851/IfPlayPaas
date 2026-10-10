import { Link, useLocation, useParams } from "react-router-dom"
export default function VisualizarQuiz({ quiz: quizProp, quizzes = [] }){
    const location = useLocation()
    const { id } = useParams()
    const quiz = quizProp ?? location.state?.quiz ?? quizzes.find(item=>String(item.id)===id)
    if(!quiz) return <section className="pagina"><h1>Quiz não encontrado</h1><Link to="/meus-quizzes">Voltar</Link></section>
    return(
        <section className="pagina">
            <h1>{quiz.titulo}</h1>
            <p>{quiz.descricao}</p>
            <h2>Perguntas</h2>
            {quiz.perguntas?.map((pergunta,indice)=>(
                <article className="card" key={pergunta.id ?? indice}>
                    <h3>{indice+1}. {pergunta.enunciado}</h3>
                    <ul>{pergunta.alternativas.map((alternativa,i)=><li key={i}>{alternativa}{i===pergunta.respostaCorreta?" — Correta":""}</li>)}</ul>
                </article>
            ))}
            <Link className="botao" to="/meus-quizzes">Voltar aos quizzes</Link>
        </section>
    )
}