"use client"
import { addTodo } from "@/api";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import {AiOutlinePlus} from "react-icons/ai"
import Modal from "./Modal";
function AddTask(){
  const router = useRouter()
  const [modalOpen, setModalOpen] = useState(false)
  const [newTask, setNewTask] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault();
    await addTodo({
      id: uuidv4(),
      text: newTask
    })
    setNewTask('')
    setModalOpen(false)
    router.refresh()
  }
  return (
    <div>
      <button onClick={() => setModalOpen(true)} className="btn btn-primary w-full">
        Add new task<AiOutlinePlus className="ml-2" size={18} />
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={handleSubmit}>
          <h3 className="font-bold text-lg">Add new task</h3>
          <div className="modal-action">
            <input 
              type="text" 
              placeholder="Type here" 
              className="input input-bordered w-full" 
              value={newTask}
              onChange={e => setNewTask(e.target.value)}/>
            <button type="submit" className="btn">Submit</button>
          </div>

        </form>
      </Modal>
    </div>
  )
}

export default AddTask;