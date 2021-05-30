import React from 'react'
import { Field, reduxForm } from 'redux-form'
import RenderDateTimePicker from '../../../share/components/RenderDateTimePicker'
import RenderInputText from '../../../share/components/RenderInputText'
import RenderNumberAnt from '../../../share/components/RenderNumberAnt'
import {option_uses} from '../../../share/options'
import RenderSelect from '../../../share/components/RenderSelect'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faTimes } from '@fortawesome/free-solid-svg-icons'
let ModalAddCustomer = props => {
    const { handleSubmit, handleShowForm } = props
    return (
        <form onSubmit={handleSubmit}>
            <div className='row bg-white m-3' >
                    <div className='col-9 mb-3 text-left' >
                        <label className="font-weight-bold text-muted">Code:</label>
                        <Field
                            name="medicine_code"
                            component={RenderSelect}
                            options={[{label:'thuocA',
                                        value:'nokv8',
                                    }]}
                            
                            placeholder='medicine_code'
                        />
                    </div>
                    <div className='col-3 mb-3 text-left' >
                    <label className="font-weight-bold text-muted">Amount:</label>
                        <Field
                            min={1}
                            name="amount"
                            component={RenderNumberAnt}
                            placeholder='Amount'
                        />
                    </div>
                    <div className='col-9 mb-3 text-left' >
                    <label className="font-weight-bold text-muted">Amount:</label>
                        <Field
                            min={1}
                            name="uses"
                            component={RenderSelect}
                            placeholder='Uses'
                            options={option_uses}
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
