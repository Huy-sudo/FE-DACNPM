import React, { Component } from 'react'
import { AutoComplete } from 'antd';
import classNames from 'classnames'

export default class renderInputEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
    }
}
  handleChange = value => {
    this.setState({
      dataSource:
        !value || value.indexOf('@') >= 0
          ? []
          : [`${value}@gmail.com`, `${value}@163.com`, `${value}@qq.com`],
    });
    this.props.input.onChange(value);
  };
  render() {
    const {
      input,
      prefix,
      suffix,
      className,
      placeholder,
      size,
      meta: { error, invalid }
    } = this.props
    return (
      <div className="position-relative">
        <AutoComplete
          value={input.value}
          size={size || 'large'}
          className={classNames(className)}
          onChange={this.handleChange}
          onSelect={(e)=>input.onChange(e)}
          placeholder={placeholder}
          prefix={prefix}
          suffix={suffix}
          dataSource={this.state.dataSource}
        />
        {invalid&&<hr className="border-danger m-0 position-absolute" style={{width: '90%', left: '5%', top: size === 'middle' ? 31 : 39}}/>}
        {error && <span className="invalid-feedback">{error}</span>}
      </div>
    )
  }
}


// const renderInputText = ({
//   input,
//   prefix,
//   suffix,
//   className,
//   placeholder,
//   size,
//   meta: { error }
// }) => { 
//     return (
//       <div>
//         <AutoComplete
//           value={input.value}
//           size={size || 'large'}
//           className={classNames(className)}
//           onChange={(e)=>input.onChange(e.target.value)}
//           placeholder={placeholder}
//           prefix={prefix}
//           suffix={suffix}
//           dataSource={dataSource}
//         />
//         {error && <span className="invalid-feedback">{error}</span>}
//       </div>
//     )
// }

// export default renderInputText