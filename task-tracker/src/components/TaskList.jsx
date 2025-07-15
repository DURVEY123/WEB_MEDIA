import React from 'react'
import TaskItem from './Taskitem'

export default function TaskList({ tasks }) {
    return (
        <ul>
            {tasks.map(t => (
                <TaskItem key={t.id} title={t.title} done={t.done} />
                ))}
        </ul>
    )
}
