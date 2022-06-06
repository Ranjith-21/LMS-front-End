import React from 'react'

const InputComp = (
    {
        placeholder = "",
        value = "",
        onChange = () => {},
        label = "",
        type='',
        className='',
        style={},
        name=''
        
    }
) => {
  return (
    <div>
        <label className='mb-2'>{label}</label>
        <input value={value} onChange={onChange} placeholder={placeholder} type={type} className={className} style={style} name={name}/>
    </div>
  )
}

export default InputComp