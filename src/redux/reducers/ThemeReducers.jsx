import React from 'react'

const ThemeReducers = (state = false, action) => {
    switch(action.type){
        case "TOGGLE_THEME": {
            return action.payload
        }

        default: {
            return state;
        }
    }
}

export default ThemeReducers