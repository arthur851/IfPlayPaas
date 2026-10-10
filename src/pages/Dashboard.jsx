import { Link } from "react-router-dom"
export default function Dashboard(){
    return(
        <section className="pagina">
            <h1>Painel principal</h1>
            <div className="cards">
                <Link className="card" to="/criar-quiz"><h2>Criar quiz</h2><p>Monte um novo desafio.</p></Link>
                <Link className="card" to="/meus-quizzes"><h2>Meus quizzes</h2><p>Consulte seus quizzes.</p></Link>
                <Link className="card" to="/historico"><h2>Histórico</h2><p>Veja seus jogos anteriores.</p></Link>
                <Link className="card" to="/ranking"><h2>Ranking</h2><p>Confira as pontuações.</p></Link>
            </div>
        </section>
    )
}