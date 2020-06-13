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
  return (
    <div class={`${resolveWidthClasses} px-3`}>
      <label
        class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
        for='grid-last-name'
      >
        {label}
      </label>
      <input
        class='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
        id='grid-last-name'
        type={type || 'text'}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        name={name}
        ref={register(validationRules)}
      />
      {errors[name] && <span>This field is required</span>}
    </div>
  );
};

export default Input;
