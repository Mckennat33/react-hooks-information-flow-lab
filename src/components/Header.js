import React, { useState } from "react";


function Header({ handleDarkModeClick, isDarkMode, setIsDarkMode }) {

    

    return(
        <div>
            <h2>Shopster</h2>
                <button onClick={handleDarkModeClick}>
                    {isDarkMode ? "Dark" : "Light"} Mode
                </button>
        </div>
    )
}


export default Header; 