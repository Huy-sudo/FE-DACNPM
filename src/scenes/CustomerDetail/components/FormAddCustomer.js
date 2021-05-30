import React from 'react'
import { Field, reduxForm } from 'redux-form'
import RenderDateTimePicker from '../../../share/components/RenderDateTimePicker'
import RenderInputText from '../../../share/components/RenderInputText'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faTimes } from '@fortawesome/free-solid-svg-icons'
let ModalAddCustomer = props => {
    const { handleSubmit, handleShowForm } = props
    return (
        <form onSubmit={handleSubmit}>
            <div className='row bg-white m-3 pt-3' >
                    <div className='col-12 mb-3 text-left' >
                        <label className="font-weight-bold text-muted">Phone:</label>
                        <Field
                            name="phone"
                            component={RenderInputText}
                            placeholder='Phone'
                        />
                    </div>
                    <div className='col-12 mb-3 text-left' >
                    <label className="font-weight-bold text-muted">Name:</label>
                        <Field
                            name="name"
                            component={RenderInputText}
                            placeholder='Name'
                        />
                    </div>
                    <div className='col-12 text-center'>
                    <button className='btn btn-primary mr-3' type="submit"> <FontAwesomeIcon icon={faSave} /> Save</button>
                    <button onClick={()=>handleShowForm(false)} className='btn btn-secondary'> <FontAwesomeIcon icon={faTimes} /> Cancel</button>
                    </div>

            </div>
        </form>
    )
}

ModalAddCustomer = reduxForm({
    enableReinitialize: true,
    form: 'FormAddCustomer'
})(ModalAddCustomer)

export default ModalAddCustomer
