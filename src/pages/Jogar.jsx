import { useState } from "react"
import { useNavigate } from "react-router-dom"
export default function Jogar({ perguntas = [], onResponder }){
    const [indice,setIndice] = useState(0)
    const [pontuacao,setPontuacao] = useState(0)
    const [respondido,setRespondido] = useState(false)
    const navigate = useNavigate()
    const pergunta = perguntas[indice]
    function responder(alternativaIndice){
        if(respondido || !pergunta) return
        const correta = alternativaIndice === pergunta.respostaCorreta
        const pontos = correta ? (pergunta.pontos ?? 1000) : 0
        setPontuacao(anterior=>anterior+pontos)
        setRespondido(true)
        onResponder?.({ pergunta, alternativaIndice, correta, pontos })
    }
    function proxima(){
        if(indice+1 < perguntas.length){
            setIndice(anterior=>anterior+1)
            setRespondido(false)
        }else{
            navigate("/resultado",{ state: { pontuacao, totalPerguntas: perguntas.length } })
        }
    }
    if(perguntas.length===0){
        return <section className="pagina"><h1>Nenhuma pergunta disponível</h1><p>Adicione perguntas ao quiz antes de iniciar.</p></section>
    }
    return(
        <section className="pagina jogo">
            <p>Pergunta {indice+1} de {perguntas.length}</p>
            <h1>{pergunta.enunciado}</h1>
            <div className="respostas">
                {pergunta.alternativas.map((alternativa,i)=>(
                    <button className="resposta" key={i} disabled={respondido} onClick={()=>responder(i)}>{alternativa}</button>
                ))}
            </div>
            {respondido && <button className="botao" onClick={proxima}>{indice+1<perguntas.length?"Próxima pergunta":"Ver resultado"}</button>}
            <p>Pontuação: {pontuacao}</p>
        </section>
    )
}