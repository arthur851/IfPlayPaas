import { useState } from "react"
import { useNavigate } from "react-router-dom"
export default function CriarQuiz({ onCriarQuiz }){
    const [titulo,setTitulo] = useState("")
    const [descricao,setDescricao] = useState("")
    const navigate = useNavigate()
    function criar(event){
        event.preventDefault()
        const quiz = { id: Date.now(), titulo, descricao, perguntas: [] }
        onCriarQuiz?.(quiz)
        navigate("/adicionar-perguntas",{ state: { quiz } })
    }
    return(
        <section className="form-box">
            <h1>Criar quiz</h1>
            <form onSubmit={criar}>
                <label>Título</label>
                <input value={titulo} onChange={event=>setTitulo(event.target.value)} required/>
                <label>Descrição</label>
                <textarea value={descricao} onChange={event=>setDescricao(event.target.value)} required/>
                <button className="botao" type="submit">Continuar</button>
            </form>
        </section>
    )
}