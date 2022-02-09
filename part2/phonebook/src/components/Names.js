import React from "react"

const Names = ({ person, found }) => {
    console.log('persons:', person)
    const filtering = person.filter(person => person.name.toLowerCase().includes(found.toLowerCase()))
    return (
        <div>
            {filtering.map(person => <div key={person.name}> {person.name} {person.number}</div>)}
        </div>
    )
}

export default Names