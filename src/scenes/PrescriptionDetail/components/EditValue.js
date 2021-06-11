import React from 'react'
import { Field, reduxForm } from 'redux-form'
import RenderDateTimePicker from '../../../share/components/RenderDateTimePicker'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'
import RenderSelect from '../../../share/components/RenderSelect'
import { Space } from 'antd'
let ContactForm = props => {
    const { handleSubmit, options, handleCancel } = props
    return (
        <form onSubmit={handleSubmit}>
                    <Space>
                        <Field
                        style={{width: '270px'}}
                            name="symptoms"
                            component={RenderSelect}
                            options={options || []}
                            mode="multiple"
                            maxTagCount= 'responsive'
                            placeholder='Symptoms'
                            size="small"
                            showTime={false}
                        />
                        <button className='btn btn-primary btn-sm' type="submit"> <FontAwesomeIcon icon={faSave} /> </button>
                        <button className='btn btn-secondary btn-sm' onClick={()=>handleCancel()} > <FontAwesomeIcon icon={faTimes} /></button>
                        </Space>

        </form>
    )
}

ContactForm = reduxForm({
    enableReinitialize: true,
    form: 'editvalue'
})(ContactForm)

export default ContactForm