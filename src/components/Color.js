import React from 'react';
import { useHistory } from 'react-router-dom'

const Color = (props) => {
    const {color, setEditColor, toggleEdit, deleteColor} = props;
    const id = color.id

    const { push } = useHistory()

    const handleDelete = (e) => {
        // e.preventDefault()
        e.stopPropagation();
        deleteColor(color, id);
        toggleEdit(false);
        // push('/bubble-page')
    }

    const handleEdit = (e) => {
        setEditColor(color);
        toggleEdit(true);
        push(`/bubble-page/edit-color/${id}`)
    }

    return(<li data-testid="color" id="color" onClick={handleEdit}>

        <span>
            <span className="delete" data-testid="delete" onClick={handleDelete}>x</span>
            {` ${color.color}`}
        </span>
        <div 
            className="color-box"
            style={{ backgroundColor: color.code.hex }}
        />
    </li>);
}

export default Color;