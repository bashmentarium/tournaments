import React from 'react'

const isEqual = (prev, next) => {
  const isNameEqual = prev.name === next.name
  const isTitleEqual = prev.title === next.title
  const isValueEqual = prev.value === next.value

  return isNameEqual && isTitleEqual && isValueEqual
}

const FormInput = ({ name, title, value, onChange }) => {
  return (
    <div className="input-wrapper">
      <span>{title}</span>
      <input name={name} value={value} onChange={onChange} />
    </div>
  )
}

// export default React.memo(FormInput, isEqual)

export default FormInput
