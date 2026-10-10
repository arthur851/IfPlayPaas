import { Link } from "react-router-dom"
export default function MeusQuizzes({ quizzes = [] }){
    return(
        <section className="pagina">
            <h1>Meus quizzes</h1>
            <Link className="botao" to="/criar-quiz">Criar quiz</Link>
            <div className="cards">
                {quizzes.map(quiz=>(
                    <article className="card" key={quiz.id}>
                        <h2>{quiz.titulo}</h2>
                        <p>{quiz.descricao}</p>
                        <p>{quiz.perguntas?.length ?? 0} perguntas</p>
                        <Link to={`/visualizar-quiz/${quiz.id}`} state={{ quiz }}>Visualizar quiz</Link>
                    </article>
                ))}
            </div>
            {quizzes.length===0 && <p>Você ainda não criou quizzes.</p>}
        </section>
    )
}