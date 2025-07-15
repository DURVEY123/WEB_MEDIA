import { useState } from 'react'
import TaskList from './components/TaskList'


export default function App() {
  const [tasks, setTasks] = useState ([
    {id: 1, title: "hacer la compra", done: false},
    {id: 2, title: "enviar correo electronico", done: true}
  ])

  return(
    <div>
      <h1>Task Tracker</h1>
      <TaskList tasks={tasks} />
    </div>
  )
}