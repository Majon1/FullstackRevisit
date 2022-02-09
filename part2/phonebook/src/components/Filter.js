import React from "react"

const Filter = ({ found, handleSearch }) => {
    console.log('found', found)
    return (
        <div>
            filter: <input value={found} onChange={handleSearch} />
        </div>
    )
}
export default Filter