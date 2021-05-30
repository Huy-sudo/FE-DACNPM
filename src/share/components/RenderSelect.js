import React, { Component } from 'react';
import { Select, Tooltip } from 'antd';
import { withTranslation } from 'react-i18next'
const Option = Select.Option;

class Index extends Component {
  render() {
    const {
      t,
      i18n,
      tReady,
      input,
      meta: { invalid, error },
      options,
      loading,
      mode='default',
      size="large",
      placeholder,
      ...rest
    } = this.props
    const value_format = mode === 'default' ? input.value.toString() : input.value
    return (
      <div className="position-relative">
        <Select
          style={{ width: '100%' }}
          {...rest}
          mode={mode || 'default'}
          size={size}
          value={value_format || (mode === 'default' ? undefined : [])}
          loading={loading}
          showSearch
          optionFilterProp="children"
          placeholder={t(placeholder)}
          onChange={(value)=>input.onChange(value === undefined ? null : value)}
          filterOption={(input, option) => String(option.children).toLowerCase().indexOf(input.toLowerCase()) >= 0}
        >
          {options.map(option=><Option key={option.value} title={option.title} value={option.value+''} disabled={option.disabled}>{option.label}</Option>)}
        </Select>
        {invalid && <hr 
          className="border-danger m-0 position-absolute" 
          style={{
            width: '90%', 
            left: '5%', 
            ...(typeof(error) === 'string' ? {
              bottom: 21
            } : {
              top: size === 'middle' ? 31 : 39
            })
            
          }}
        />}
        {error && <span className="invalid-feedback">{error}</span>}
      </div>
    );
  }
}

export default withTranslation()(Index);