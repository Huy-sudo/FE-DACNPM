import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'
import RenderNumberAnt from '../../../share/components/RenderNumberAnt'
import { Space } from 'antd'
let ContactForm = props => {
    const { handleSubmit, handleCancel } = props
    return (
        <form onSubmit={handleSubmit}>
                    <Space>
                        <Field
                            style={{width: '300px'}}
                            name="value"
                            component={RenderNumberAnt}
                            mode="multiple"
                            maxTagCount= 'responsive'
                            placeholder="Value"
                            size="big"
                            showTime={false}
                            min={0}
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