import styles from './TodoList.module.css'

const TodoList = () => {
    return (
        <div className={styles.todoList_container}>
            <h1>Lista de tarefas</h1>
            <h2>Sobre o projeto</h2>
            <p>Esse projeto é sobre uma lista de tarefas com cadastro/login, que possibilta que vários usuários possam utilizar o mesmo aplicativo e com seus respectivos dados sendo carregados somente para sí.</p>
            <p>
                Além de todas as funcionalidades que uma lista de tarefas tem, essa em específico dá ao usuário uma melhor experiência, pois nela é possível personalizar o plano de fundo com uma imagem escolhida pelo usuário e também personalizar cores, de acordo com o gosto de cada perfil.
            </p>
            <p>
                Para desenvolver-la, utilizei React como biblioteca principal, react-icons, react-router-dom e firebase com backend.
            </p>

            <h2>Acesso</h2>

            <p>Para acessar esse site, basta clicar no link disponível abaixo:</p>

            <span>
                <a target='_blank' rel='noreferrer noopener' href='https://listadetarefas-react.netlify.app/'>https://listadetarefas-react.netlify.app/</a>
            </span>

        </div>
    )
}


export default TodoList