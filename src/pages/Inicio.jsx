import { Link } from "react-router-dom"
export default function Inicio(){
    return(
        <section className="hero">
            <h1>Bem-vindo ao ifPlay!</h1>
            <p>Crie quizzes, desafie seus colegas e aprenda jogando.</p>
            <div className="botoes">
                <Link className="botao" to="/criar-quiz">Criar quiz</Link>
                <Link className="botao secundario" to="/entrar-jogo">Entrar em um jogo</Link>
            </div>
        </section>
    )
}