import React from "react"

const Names = ({ name }) => {
    console.log('persons', name.name)
    return (
        <li>{name.name}</li>
    )
}

export default Names