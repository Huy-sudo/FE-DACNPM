import React from 'react'
import { Input } from 'antd';
import classNames from 'classnames'
const renderInputPassword = ({
  input,
  className,
  placeholder,
  size,
  meta: { error, invalid }
}) => { 
    return (
      <div className="position-relative">
        <Input.Password
          value={input.value}
          size={size || 'large'}
          className={classNames(className)}
          onChange={(e)=>input.onChange(e.target.value)}
          placeholder={placeholder}
        />
        {invalid&&<hr className="border-danger m-0 position-absolute" style={{width: '90%', left: '5%', top: size === 'middle' ? 31 : 39}}/>}
        {error && <span className="invalid-feedback">{error}</span>}
      </div>
    )
}

export default renderInputPassword