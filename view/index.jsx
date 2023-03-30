import React from 'react'

function Index(props) {
    // can't use hooks or state 
    // can't use event listeners in the same way
    return (
        <div>
            <h1>Index View</h1>
            <ul>
                {array.map((array, index) => 
                    <li key={index}>
                        <a href={`/array/${array._id}`}><strong>{array.name}</strong></a>
                    </li>
                )}
            </ul>
            <a href="/array/new">Add...</a>
        </div>
    )
}

export default 