import React from 'react';
import Input from '../src/components/common/Input';

const register = () => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [username, setUsername] = React.useState('');

  return (
    <div className='flex justify-center items-center w-full h-screen'>
      <form className='w-full max-w-lg '>
        <div className='flex flex-wrap md:-mx-3 mb-6'>
          {/* <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
          //   <label
          //     className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
          //     for='grid-first-name'
          //   >
          //     First Name
          //   </label>
          //   <input
          //     className='appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
          //     id='grid-first-name'
          //     type='text'
          //     placeholder='Jane'
          //   />
          //   <p className='text-red-500 text-xs italic'>
          //     Please fill out this field.
          //   </p>                                                ERROR CLASSES
          // </div> */}
          <Input
            widthClasses='w-full md:w-1/2'
            placeholder='First Name'
            label='First Name'
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Input
            widthClasses='w-full md:w-1/2'
            placeholder='Last Name'
            label='Last Name'
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className='flex flex-wrap md:-mx-3 mb-6'>
          <Input
            placeholder='Username'
            label='Username'
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className='flex flex-wrap md:-mx-3 mb-6'>
          <Input
            placeholder='Email'
            label='Email'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className=' md:-mx-3 mb-6'>
          <Input
            type='password'
            placeholder='Password'
            label='Password'
            onChange={(e) => setPassword(e.target.value)}
            value={lastName}
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

export default register;
