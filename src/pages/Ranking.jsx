export default function Ranking({ jogadores = [] }){
    const ranking = [...jogadores].sort((a,b)=>(b.pontuacao ?? 0)-(a.pontuacao ?? 0))
    return(
        <section className="pagina">
            <h1>Ranking</h1>
            <div className="ranking">
                {ranking.map((jogador,indice)=>(
                    <article className="card" key={jogador.id ?? indice}>
                        <strong>{indice+1}º lugar</strong>
                        <span>{jogador.nome}</span>
                        <span>{jogador.pontuacao ?? 0} pontos</span>
                    </article>
                ))}
            </div>
            {ranking.length===0 && <p>O ranking ainda está vazio.</p>}
        </section>
    )
}