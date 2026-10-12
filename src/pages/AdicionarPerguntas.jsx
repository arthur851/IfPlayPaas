export default function AdicionarPerguntas(){
    return(
        <section className="form-box">
            <h1>Adicionar perguntas</h1>
            <form>
                <label htmlFor="enunciado">Enunciado da pergunta</label>
                <textarea id="enunciado" name="enunciado" required/>
                <label htmlFor="tipo-pergunta">Tipo de pergunta</label>
                <select id="tipo-pergunta" name="tipo" required>
                    <option value="multipla-escolha">Múltipla escolha</option>
                    <option value="verdadeiro-falso">Verdadeiro ou falso</option>
                </select>
                <label htmlFor="alternativa-a">Alternativa A</label>
                <input id="alternativa-a" name="alternativaA" required/>
                <label htmlFor="alternativa-b">Alternativa B</label>
                <input id="alternativa-b" name="alternativaB" required/>
                <label htmlFor="alternativa-c">Alternativa C</label>
                <input id="alternativa-c" name="alternativaC"/>
                <label htmlFor="alternativa-d">Alternativa D</label>
                <input id="alternativa-d" name="alternativaD"/>
                <label htmlFor="resposta-correta">Resposta correta</label>
                <select id="resposta-correta" name="respostaCorreta" required>
                    <option value="0">Alternativa A</option>
                    <option value="1">Alternativa B</option>
                    <option value="2">Alternativa C</option>
                    <option value="3">Alternativa D</option>
                </select>
                <label htmlFor="pontos">Pontuação</label>
                <input type="number" id="pontos" name="pontos" min="0" defaultValue="1000"/>
                <button className="botao" type="submit">Adicionar pergunta</button>
            </form>
            <a className="botao secundario" href="/meus-quizzes">Finalizar quiz</a>
        </section>
    )
}