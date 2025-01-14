import { ADD_FAV, REMOVE_FAV } from "./actions"


const initialState = {
    myFavorites: [],
    allCharacters: [],
    errors: {},
}

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: payload,
                allCharacters: payload,
                errors: {}
            }
        
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: payload,
                errors: {}
            }
    
        case "ERROR":
            return {
                ...state,
                errors: payload,
            }
    
        default:
            return { ...state }
    }

}

export default rootReducer;