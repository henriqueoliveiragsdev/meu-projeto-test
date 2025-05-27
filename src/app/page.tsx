export default function Home() {
  const tarefas = [
    { id: 1, nome: "Fazer o TODO", data: "20/06/2025", status: "concluída" },
    { id: 2, nome: "Nome da tarefa", data: "25/06/2024", status: "em andamento" },
    { id: 3, nome: "Nome da tarefa", data: "30/06/2024", status: "concluída" },
  ];

  return (
    <div>
      <div className="header">To-Do List - Ceos 📝</div>

      <div className="container">
        <div className="title">Tarefas ⭐</div>
        <div className="task-list">
          {tarefas.map((tarefa, index) => (
            <div key={tarefa.id} className="task">
              <p>
                <strong>{index + 1}. {tarefa.nome}</strong> - Até: {tarefa.data}
              </p>
              <p>
                <strong>Status:</strong> {tarefa.status}
              </p>
              <div className="buttons">
                <button>Ver</button>
                <button>Editar</button>
                <button>Excluir</button>
              </div>
            </div>
          ))}
        </div>

        <div className="new-task">
          <button>Nova tarefa</button>
        </div>
      </div>
    </div>
  );
}
