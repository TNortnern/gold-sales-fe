const Input = ({
  widthClasses,
  label,
  placeholder,
  onChange,
  type,
  value,
  name,
  validationRules,
  validationRefs,
}) => {
  const { register, errors } = validationRefs; // initialise the hook

  //   <input
  //   className='px-6 py-2 border border-red-800'
  //   type='text'
  //   name='test'
  //   ref={register({ required: true, maxLength: 20 })}
  // />
  // {errors.test && <span>This field is required</span>}
  const resolveWidthClasses = widthClasses || 'w-full';

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div class={`${resolveWidthClasses} px-3`}>
      <label
        class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
        for='grid-last-name'
      >
        {label}
      </label>
      <input
        class={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
          errors[name] ? 'border border-red-500 focus:border-red-500' : ''
        }`}
        id='grid-last-name'
        type={type || 'text'}
        onChange={onChange}
        placeholder={placeholder}
        defaultValue={value}
        name={name}
        ref={register(validationRules)}
      />
      {errors[name] && (
        <span>
          {errors[name].type === 'required' && (
            <p className='text-red-500 text-xs italic'>
              This Field Is Required
            </p>
          )}
          {errors[name].type === 'pattern' && (
            <p className='text-red-500 text-xs italic'>Invalid Email Address</p>
          )}
          {errors[name].type === 'minLength' && (
            <p className='text-red-500 text-xs italic'>
              Mininum Of 2 Characters
            </p>
          )}
        </span>
      )}
    </div>
  );
};

export default Input;
