import React from 'react';
import Input from '../src/components/common/Input';
import { useForm } from 'react-hook-form';

const register = () => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [username, setUsername] = React.useState('');

  const { register, handleSubmit, errors } = useForm(); // initialise the hook

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className='flex justify-center items-center w-full h-screen'>
      <form className='w-full max-w-lg' onSubmit={handleSubmit(onSubmit)}>
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
            defaultValue={firstName}
            name='firstName'
            validationRules={{ required: true, minLength: 2 }}
            validationRefs={{ register, errors }}
          />
          <Input
            widthClasses='w-full md:w-1/2'
            placeholder='Last Name'
            label='Last Name'
            onChange={(e) => setLastName(e.target.value)}
            defaultValue={lastName}
            name='lastName'
            validationRules={{ required: true, minLength: 2 }}
            validationRefs={{ register, errors }}
          />
        </div>
        <div className='flex flex-wrap md:-mx-3 mb-6'>
          <Input
            placeholder='Username'
            label='Username'
            onChange={(e) => setUsername(e.target.value)}
            defaultValue={username}
            name='username'
            validationRules={{ required: true, minLength: 2 }}
            validationRefs={{ register, errors }}
          />
        </div>
        <div className='flex flex-wrap md:-mx-3 mb-6'>
          <Input
            placeholder='Email'
            label='Email'
            onChange={(e) => setEmail(e.target.value)}
            defaultValue={email}
            name='email'
            validationRules={{
              required: 'required',
              minLength: 2,
              pattern: {
                value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'invalid email address',
              },
            }}
            validationRefs={{ register, errors }}
          />
        </div>
        <div className=' md:-mx-3 mb-6'>
          <Input
            type='password'
            placeholder='Password'
            label='Password'
            onChange={(e) => setPassword(e.target.value)}
            defaultValue={password}
            name='password'
            validationRules={{ required: true }}
            validationRefs={{ register, errors }}
          />
        </div>
        <div className='md:flex md:items-center text-center block mx-auto w-full'>
          <div className='md:w-1/3 md:px-0 px-3'>
            <button
              className='w-full mx-auto shadow bg-orange-500 hover:bg-orange-600 focus:outline-none text-white font-bold py-2 px-4 rounded'
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

export default register;
