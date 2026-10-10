import { useState } from "react"
import { useNavigate } from "react-router-dom"
export default function EntrarJogo({ onEntrarJogo }){
    const [codigo,setCodigo] = useState("")
    const navigate = useNavigate()
    function entrar(event){
        event.preventDefault()
        onEntrarJogo?.(codigo)
        navigate("/sala-espera",{ state: { codigo } })
    }
    return(
        <section className="form-box">
            <h1>Entrar em um jogo</h1>
            <p>Digite o código fornecido pelo organizador.</p>
            <form onSubmit={entrar}>
                <label>Código do jogo</label>
                <input value={codigo} onChange={event=>setCodigo(event.target.value)} required/>
                <button className="botao" type="submit">Entrar</button>
            </form>
        </section>
    )
}