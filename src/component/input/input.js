import React from 'react'
import "./Input.css"
import PropTypes from "prop-types"


const Input = ({name, type, onChange, value,placeholder}) => {
    return (
        <div className='naruto'>
             <input name={name} type={type} onChange={onChange} value={value} placeholder={placeholder}/>
        </div>
    )
}
Input.propTypes = {
    name:PropTypes.string,
    type:PropTypes.string,
    onChange:PropTypes.func.isRequired,
    placeholder:PropTypes.string
}
export default Input
