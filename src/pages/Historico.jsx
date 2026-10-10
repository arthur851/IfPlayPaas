export default function Historico({ historico = [] }){
    return(
        <section className="pagina">
            <h1>Histórico de jogos</h1>
            {historico.map((jogo,indice)=>(
                <article className="card" key={jogo.id ?? indice}>
                    <h2>{jogo.titulo ?? "Quiz"}</h2>
                    <p>Pontuação: {jogo.pontuacao ?? 0}</p>
                    <p>Data: {jogo.data ?? "Não informada"}</p>
                </article>
            ))}
            {historico.length===0 && <p>Nenhum jogo registrado.</p>}
        </section>
    )
}