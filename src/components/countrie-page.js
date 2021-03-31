import React from 'react';


export default function CountriePage(match) {
    return (
        <div>
            {match.params.id}
        </div>
    )
}