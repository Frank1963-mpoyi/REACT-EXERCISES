import {FaTimes} from 'react-icons/fa'

const Task = ({task, onDelete}) => {
    return (
        <div>
            <h3 className="">{task.text} <FaTimes style={{color:'red',
        cursor:'pointer'}} className="margin" onClick ={()=> onDelete(task.id)} /></h3>
            <p >{task.day}</p>
        </div>
    )
}

export default Task

