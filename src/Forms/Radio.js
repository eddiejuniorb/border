import React from 'react'

function Radio({ name }) {
    return (
        <input type="radio" name={name} id="" className='w-4 h-4 checked:bg-orange-500' />
    )
}

export default Radio