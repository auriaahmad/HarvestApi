function CustomInput({
  type,
  label,
  placeholder,
  onChange,
  isDisabled,
  className,
  name,
  id,
  defaultValue,
  required,
}) {
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className='block text-[14px] mb-2 font-semibold  text-white mt-[10px]'
      >
        {label}
      </label>
      <input
        className='w-full text-black px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 bg-transparent text-lg placeholder:italic placeholder:text-slate-400 block bg-white'
        placeholder={placeholder}
        type={type}
        defaultValue={defaultValue}
        name={name}
        id={id}
        onChange={onChange}
        disabled={isDisabled}
        required={required}
      />
    </div>
  );
}

export default CustomInput;
