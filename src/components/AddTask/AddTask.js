import React from 'react';
import './AddTask.css'
const AddTask = () => {
    const handleTask = event => {
        event.preventDefault()
        const taskInfo = event.target.task.value;
        console.log(taskInfo);
    }
    return (
        <div className='w-100'>
            <h2 className='text-center'>Submit Your Task</h2>
            <form onSubmit={handleTask}>
                <textarea className='d-block mx-auto mt-5 mb-4 p-3' name="task" type="text" placeholder='Submit Task' id="" cols="30" rows="3" required></textarea>
                <input className='upload-img' type="file" name="" id="" />
                <button className='btn btn-primary d-block mx-auto my-btn mt-3'>Submit</button>
            </form>
        </div>
    );
};

export default AddTask;