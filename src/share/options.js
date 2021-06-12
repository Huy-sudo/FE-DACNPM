export const option_uses = [
    {value:1, label: 'Uong'},
    {value:2, label: 'Thoa'},
    {value:3, label: 'Tiem'},
    {value:4, label: 'Tam'}
]

export const options_status_prescription = [
    {value:1, label: 'Pending', span: <span className="badge px-2 badge-info"> Pending </span> },
    {value:2, label: 'Complete', span: <span className="badge px-2 badge-success"> Complete </span>},
    {value:3, label: 'Cancel', span: <span className="badge px-2 badge-danger"> Cancel </span>},
]

export const getLabelOption=(value=0,option=[]) =>{
    let span = option.find(d=> d.value == value)?.span || <span> not status </span>
    return span
}