import React, { useState } from 'react';

const AcceptTask = ({ data }) => {
  // Use state to track the task status (new, completed, or failed)
  const [taskStatus, setTaskStatus] = useState(data.status || 'active');

  const handleMarkCompleted = () => {
    setTaskStatus('completed');
  };

  const handleMarkFailed = () => {
    setTaskStatus('failed');
  };

  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
        <h4 className='text-sm'>{data.taskDate}</h4>
      </div>
      <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
      <p className='text-sm mt-2'>{data.taskDescription}</p>
      <div className='flex justify-between mt-6'>
        {/* Conditionally render buttons */}
        {taskStatus === 'active' && (
          <>
            <button
              className='bg-green-500 rounded font-medium py-1 px-2 text-xs cursor-pointer'
              onClick={handleMarkCompleted}
            >
              Mark as Completed
            </button>
            <button
              className='bg-red-500 rounded font-medium py-1 px-2 text-xs cursor-pointer'
              onClick={handleMarkFailed}
            >
              Mark as Failed
            </button>
          </>
        )}

        {/* Show the "Completed" button if task is completed */}
        {taskStatus === 'completed' && (
          <button className='w-full bg-green-600 rounded font-medium py-1 px-2 text-xs cursor-pointer'>
            Completed
          </button>
        )}

        {/* Show the "Failed" button if task is failed */}
        {taskStatus === 'failed' && (
          <button className='w-full bg-red-600 rounded font-medium py-1 px-2 text-xs cursor-pointer'>
            Failed
          </button>
        )}
      </div>
    </div>
  );
};

export default AcceptTask;
