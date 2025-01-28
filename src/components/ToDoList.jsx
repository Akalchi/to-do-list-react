import React, { useState } from 'react';

export default function ToDoList() {

    const [tasks, setTasks] = useState(["Eat", "Sleep", "Code"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(e){
        setNewTask(e.target.value);

    }

    function addTask(){
        if(newTask.trim() !== ""){
        setTasks(t => [...tasks, newTask]);
        setNewTask("");
        }
    }

    function deleteTask(i){
        const updatedTasks = tasks.filter((_, index) => index !== i);
        setTasks(updatedTasks);
    }

    function moveTaskUp(i){
        if(i > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[i], updatedTasks[i-1]] = [updatedTasks[i-1], updatedTasks[i]];  
            setTasks(updatedTasks);  
        }
    }

    function moveTaskDown(i){
         if(i < tasks.length-1){
            const updatedTasks = [...tasks];
            [updatedTasks[i], updatedTasks[i+1]] = [updatedTasks[i+1], updatedTasks[i]];  
            setTasks(updatedTasks);  
        }
    }

    return(
        <div className='text-center mt-24'>
            <h1 className='font-bold text-5xl mb-4'>To-Do-List</h1>
            <div>
                <input 
                className='text-2xl p-3 mb-4 rounded-md border border-gray-300'
                type="text"
                placeholder='Enter a new task'
                value={newTask}
                onChange={handleInputChange}
                 />
                 <button 
                 className='text-2xl font-bold ml-2 py-3 px-5 rounded-md cursor-pointer bg-white border border-gray-300'
                 onClick={addTask}>
                        Add
                 </button>
            </div>
            <ol className='p-0'>
                {tasks.map((task, i) => (
                    <li
                    className='text-3xl font-bold p-4 bg-white mb-3 border border-gray-300 rounded-md flex items-center' 
                    key={i}>
                        <span className='flex-[1] '>{task}</span>

                        <button className='text-2xl font-bold color-white ml-3 py-3 px-5 rounded-md cursor-pointer bg-violet-400'
                        onClick={() => deleteTask(i)}>
                            Delete
                        </button>

                        <button 
                        className='text-2xl font-bold color-white ml-3 py-3 px-5 rounded-md cursor-pointer bg-violet-400'
                        onClick={() => moveTaskUp(i)}>
                            Up
                        </button>

                        <button
                        className='text-2xl font-bold color-white ml-3 py-3 px-5 rounded-md cursor-pointer bg-violet-400' 
                        onClick={() => moveTaskDown(i)}>
                            Down
                        </button>
                    </li>
                ))}
                
            </ol>
        </div>
    )
}