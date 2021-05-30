import React, { Component } from 'react'

class renderCheckbox extends Component {
    render() {
        const {
            input,
            type,
            templates,                  
        } = this.props                        
          
        return (
            templates.map((template, i) => 
                <div className="card text-center" key={i}>
                    {/* <img className="card-img-top" src={`${template.image}`} alt={template.image}/> */}
                    <div className="card-body">
                        <h5 className="card-title">{template.name}</h5>
                        <p className="card-text">Template {template.type}</p>
                        <label className="switch">
                            <input
                                name={`${input.name}[${template.id}]`}  
                                type={type}
                                value={template.id}
                                checked={input.value.indexOf(template.id) !== -1} 
                                onChange={(event)=>{                        
                                    const newValue = [...input.value]
                                    if (event.target.checked) {
                                        newValue.push(template.id)
                                    } else {
                                        newValue.splice(newValue.indexOf(template.id), 1)
                                    }
                                    return input.onChange(newValue)
                                }}
                            />                                                                                                
                            <span className="slider round"></span>                
                        </label>
                    </div>
                </div>
            )            
        )
    }
}

export default renderCheckbox;