# IfPlayPaas

# Rotas do Site

O IfPlay utiliza React Router para gerenciar a navegação entre suas páginas.

| Rota | Página | Descrição |
|---|---|---|
| `/` | Início | Página inicial da plataforma. |
| `/login` | Login | Permite que o usuário entre na plataforma. |
| `/cadastro` | Cadastro | Permite criar uma nova conta. |
| `/dashboard` | Dashboard | Painel principal do usuário. |
| `/criar-quiz` | Criar Quiz | Permite criar um novo quiz. |
| `/adicionar-perguntas` | Adicionar Perguntas | Permite adicionar perguntas ao quiz. |
| `/entrar-jogo` | Entrar no Jogo | Permite entrar em uma partida. |
| `/sala-espera` | Sala de Espera | Exibe os participantes antes do início da partida. |
| `/jogar` | Jogar | Permite responder às perguntas do quiz. |
| `/resultado` | Resultado | Exibe os resultados da partida. |
| `/recuperar-senha` | Recuperar Senha | Permite iniciar a recuperação de senha. |
| `/meus-quizzes` | Meus Quizzes | Lista os quizzes do usuário. |
| `/visualizar-quiz/:id` | Visualizar Quiz | Exibe os detalhes de um quiz específico, identificado pelo ID. |
| `/perfil` | Perfil | Permite visualizar e atualizar os dados do perfil. |
| `/historico` | Histórico | Exibe o histórico de partidas ou atividades. |
| `/ranking` | Ranking | Exibe a classificação dos jogadores. |
| `/configuracoes` | Configurações | Disponibiliza as configurações da plataforma. |

### Observações

- Todas as rotas estão agrupadas dentro do componente `Layout`.
- A rota `/visualizar-quiz/:id` utiliza o parâmetro dinâmico `:id` para identificar o quiz.
- A navegação é gerenciada pelos componentes `BrowserRouter`, `Routes` e `Route`, da biblioteca `react-router-dom`.

**Total: 17 rotas.**