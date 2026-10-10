import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
export default function AdicionarPerguntas({ onSalvarPergunta }){
    const location = useLocation()
    const navigate = useNavigate()
    const quiz = location.state?.quiz
    const [enunciado,setEnunciado] = useState("")
    const [alternativas,setAlternativas] = useState(["","","",""])
    const [respostaCorreta,setRespostaCorreta] = useState("0")
    const [perguntas,setPerguntas] = useState(quiz?.perguntas || [])
    function atualizarAlternativa(indice,valor){
        setAlternativas(anterior=>anterior.map((item,i)=>i===indice?valor:item))
    }
    function adicionar(event){
        event.preventDefault()
        const pergunta = { id: Date.now(), enunciado, alternativas, respostaCorreta: Number(respostaCorreta), pontos: 1000 }
        setPerguntas(anterior=>[...anterior,pergunta])
        onSalvarPergunta?.(pergunta)
        setEnunciado("")
        setAlternativas(["","","",""])
        setRespostaCorreta("0")
    }
    return(
        <section className="form-box">
            <h1>Adicionar perguntas</h1>
            {quiz && <p>Quiz: {quiz.titulo}</p>}
            <form onSubmit={adicionar}>
                <label>Enunciado</label>
                <textarea value={enunciado} onChange={event=>setEnunciado(event.target.value)} required/>
                {alternativas.map((alternativa,indice)=>(
                    <div key={indice}>
                        <label>Alternativa {indice+1}</label>
                        <input value={alternativa} onChange={event=>atualizarAlternativa(indice,event.target.value)} required/>
                        <label>
                            <input type="radio" name="correta" checked={respostaCorreta===String(indice)} value={indice} onChange={event=>setRespostaCorreta(event.target.value)}/>
                            Resposta correta
                        </label>
                    </div>
                ))}
                <button className="botao" type="submit">Adicionar pergunta</button>
            </form>
            <p>Perguntas adicionadas: {perguntas.length}</p>
            <button className="botao secundario" onClick={()=>navigate("/meus-quizzes")}>Finalizar quiz</button>
        </section>
    )
}