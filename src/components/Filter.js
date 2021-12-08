import React, {useState} from "react"


function Filter({ onChangeCategory }) {

    return (
            
            <select name="filter" onChange={onChangeCategory}>
                <option value="All">Filter by category</option>
                <option value="Produce">Produce</option>
                <option value="Dairy">Dairy</option>
                <option value="Dessert">Dessert</option>
            </select>
            
        
    )
}

export default Filter