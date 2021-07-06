import React from 'react'
import { Field, reduxForm } from 'redux-form'
import RenderDateTimePicker from '../../../share/components/RenderDateTimePicker'
import RenderInputText from '../../../share/components/RenderInputText'
import RenderNumberAnt from '../../../share/components/RenderNumberAnt'
import RenderSelect from '../../../share/components/RenderSelect'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faTimes } from '@fortawesome/free-solid-svg-icons'
let ModalCreateCustomer = props => {
    const { handleSubmit, handleShowFormMedicine, unit = [] } = props
    
    let options = unit.map(d=>{
        return {label: d.value, value: d.id }
    }) || []

    return (
        <form onSubmit={handleSubmit}>
            <div className='row bg-white m-3' >
                    <div className='col-6 mb-3 text-left' >
                        <label className="font-weight-bold text-muted">Code:</label>
                        <Field
                            name="code"
                            component={RenderInputText}
                            placeholder='Code'
                        />
                    </div>
                    <div className='col-6 mb-3 text-left' >
                        <label className="font-weight-bold text-muted">Name:</label>
                        <Field
                            name="name"
                            component={RenderInputText}
                            placeholder='Name'
                        />
                    </div>
                    <div className='col-6 mb-3 text-left' >
                        <label className="font-weight-bold text-muted">Unit:</label>
                        <Field
                            name="unit"
                            component={RenderSelect}
                            placeholder='Unit'
                            options={options}
                        />
                    </div>
                    <div className='col-6 mb-3 text-left' >
                        <label className="font-weight-bold text-muted">Cost:</label>
                        <Field
                            name="cost_per_med"
                            component={RenderNumberAnt}
                            placeholder='Cost'
                            min={1000}
                        />
                    </div>
                    <div className='col-12 text-center'>
                    <button className='btn btn-primary mr-3' type="submit"> <FontAwesomeIcon icon={faSave} /> Save</button>
                    <a onClick={()=>handleShowFormMedicine(false)} className='btn btn-secondary'> <FontAwesomeIcon icon={faTimes} /> Cancel</a>
                    </div>
            </div>
        </form>
    )
}

ModalCreateCustomer = reduxForm({
    enableReinitialize: true,
    form: 'FormCreateCustomer'
})(ModalCreateCustomer)

export default ModalCreateCustomer
