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
        
    }
) => {
  return (
    <div>
        <label className='mb-2'>{label}</label>
        <input value={value} onChange={onChange} placeholder={placeholder} type={type} className={className} style={style} />
    </div>
  )
}

export default InputComp