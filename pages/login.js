import React from 'react';
import Input from '../src/components/common/Input';

const login = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  return (
    <div className='flex justify-center items-center w-full h-screen'>
      <form className='w-full max-w-lg '>
        <div className='flex flex-wrap md:-mx-3 mb-6'>
          <Input
            placeholder='Username'
            label='Username'
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className=' md:-mx-3 mb-6'>
          <Input
            type='password'
            placeholder='Password'
            label='Password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='md:flex md:items-center text-center block mx-auto w-full'>
          <div className='md:w-1/3 md:px-0 px-3'>
            <button
              className=' w-full mx-auto shadow bg-orange-500 hover:bg-orange-600 focus:outline-none text-white font-bold py-2 px-4 rounded'
              type='button'
            >
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default login;
