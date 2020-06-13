import React from 'react';
import Input from '../src/components/common/Input';
import { useForm } from 'react-hook-form';

const login = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { register, handleSubmit, errors } = useForm(); // initialise the hook

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className='flex justify-center items-center w-full h-screen'>
      <form className='w-full max-w-lg' onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-wrap md:-mx-3 mb-6'>
          <Input
            placeholder='Username'
            label='Username'
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            name='username'
            validationRules={{ required: true }}
            validationRefs={{ register, errors }}

            // placeholder='First Name'
            // label='First Name'
            // onChange={(e) => setFirstName(e.target.value)}
            // value={firstName.text}
            // name='firstName'
            // validationRules={{ required: true }}
            // validationRefs={{ register, errors }}
          />
        </div>
        <div className=' md:-mx-3 mb-6'>
          <Input
            type='password'
            placeholder='Password'
            label='Password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            name='password'
            validationRules={{ required: true }}
            validationRefs={{ register, errors }}
          />
        </div>
        <div className='md:flex md:items-center text-center block mx-auto w-full'>
          <div className='md:w-1/3 md:px-0 px-3'>
            <button
              className=' w-full mx-auto shadow bg-orange-500 hover:bg-orange-600 focus:outline-none text-white font-bold py-2 px-4 rounded'
              type='submit'
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
