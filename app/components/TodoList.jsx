import Task from "./Task"
function TodoList({tasks}) {

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>TASKS</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TodoList