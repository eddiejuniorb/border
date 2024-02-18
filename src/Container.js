import React from 'react'

function Container({ children }) {
    return (
        <div className='bg-white rounded-lg p-5 shadow shadow-slate-300/20'>{children}</div>
    )
}

export default Container