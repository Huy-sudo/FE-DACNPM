import React from 'react'
import { Field, reduxForm } from 'redux-form'
import RenderInputPassword from '../../../../share/components/RenderInputPassword'
import RenderInputText from '../../../../share/components/RenderInputText'

let ContactForm = props => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <div className='row' >
                <div className='col-3'>
                </div>
                <div className='col-6'>
                    <div className='col-12 mb-3 text-left' >
                        <label className='font-weight-bold' >Email</label>
                        <Field
                            name="email"
                            component={RenderInputText}
                            suffix="@gmail"
                            placeholder='EMAIL'
                        />
                    </div>
                    <div className='col-12 mb-3 text-left'>
                        <label className='font-weight-bold '>Password</label>
                        <Field
                            name="password"
                            placeholder='PASSWORD'
                            component={RenderInputPassword}
                        />
                    </div>
                    <button className='btn btn-primary' type="submit">Submit</button>
                </div>
            </div>
            <div className='col-3'>
            </div>
        </form>
    )
}

ContactForm = reduxForm({
    enableReinitialize: true,
    form: 'contact'
})(ContactForm)

export default ContactForm