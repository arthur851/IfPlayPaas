import { useLocation, useNavigate } from "react-router-dom"
export default function SalaEspera({ participantes = [], onIniciarJogo }){
    const location = useLocation()
    const navigate = useNavigate()
    const codigo = location.state?.codigo || ""
    function iniciar(){
        onIniciarJogo?.()
        navigate("/jogar")
    }
    return(
        <section className="pagina">
            <h1>Sala de espera</h1>
            <p>Código da sala: <strong>{codigo || "Não informado"}</strong></p>
            <h2>Participantes ({participantes.length})</h2>
            <ul>{participantes.map((participante,indice)=><li key={participante.id ?? indice}>{participante.nome ?? participante}</li>)}</ul>
            <button className="botao" onClick={iniciar}>Iniciar jogo</button>
        </section>
    )
}