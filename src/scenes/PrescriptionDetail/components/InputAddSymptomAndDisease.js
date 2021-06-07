import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {option_uses} from '../../../share/options'
import RenderSelect from '../../../share/components/RenderSelect'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faTimes } from '@fortawesome/free-solid-svg-icons'
let FormAdd = props => {
    const { handleSubmit, handleShowForm } = props
    return (
        <form onSubmit={handleSubmit}>
            <div className='row bg-white m-3' >
                    <div className='col-9 mb-3 text-left' >
                        <label className="font-weight-bold text-muted">Symptoms:</label>
                        <Field
                            name="Symptoms"
                            component={RenderSelect}                     
                            placeholder='Symptoms'
                            options={option_uses}
                        />
                    </div>
                    <div className='col-9 mb-3 text-left' >
                    <label className="font-weight-bold text-muted">Diseases:</label>
                        <Field
                            name="Diseases"
                            component={RenderSelect}
                            options={option_uses}
                            placeholder='Diseases'
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

FormAdd = reduxForm({
    enableReinitialize: true,
    form: 'FormAdd'
})(FormAdd)

export default FormAdd
