"use client"
import React, { useState } from 'react'
import {FiEdit, FiTrash2} from 'react-icons/fi'
import { useRouter } from "next/navigation";
import {editTodo, deleteTodo} from "@/api"

import Modal from './Modal';
function Task({task}) {
  const router = useRouter()
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalDeleted, setOpenModalDeleted] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(task.text)

  const handleSubmitEdit = async (e) => {
    e.preventDefault()
    await editTodo({
      id: task.id,
      text: taskToEdit
    })
    setOpenModalEdit(false)
    router.refresh()
  }

  const handleDeleteTask = async (id) => {
    await deleteTodo(id)
    setOpenModalEdit(false)
    router.refresh()
  }

  return (
    <tr>
      <td className='w-full'>{task.text}</td>
      <td className='flex gap-5'>
        <FiEdit 
          cursor="pointer" 
          className = "text-blue-500" 
          size={25}
          onClick={()=>setOpenModalEdit(true)}
          />
        <Modal 
          modalOpen={openModalEdit} 
          setModalOpen={setOpenModalEdit}>
          <form onSubmit={handleSubmitEdit}>
            <h3 className="font-bold text-lg">Edit task</h3>
            <div className="modal-action">
              <input 
                type="text" 
                placeholder="Type here" 
                className="input input-bordered w-full" 
                value={taskToEdit}
                onChange={e => setTaskToEdit(e.target.value)}/>
              <button type="submit" className="btn">Submit</button>
            </div>

          </form>
        </Modal>
        <FiTrash2 
          cursor="pointer" 
          className = "text-red-500" 
          size={25}
          onClick={()=>setOpenModalDeleted(true)}/>
        <Modal 
          modalOpen={openModalDeleted} 
          setModalOpen={setOpenModalDeleted}>

          <h3 className="text-lg">Are you sure, you want to delete this task?</h3>
          <div className="modal-action">
            <button 
              className="btn"
              onClick={()=>handleDeleteTask(task.id)}
              >Yes</button>
          </div>


        </Modal>
      </td>
  </tr>
  )
}

export default Task