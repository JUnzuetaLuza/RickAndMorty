import { ADD_FAV, REMOVE_FAV } from "./actions"


const initialState = {
    myFavorites: [],
}

const rootReducer = (state = initialState, action)  => {
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state, action.payload]
            }
        
        case REMOVE_FAV:
            const filteredFav = state.myFavorites.filter(fav => fav.id !== action.payload)
            return {
                ...state,
                myFavorites: filteredFav
            }
    
        default:
            return { ...state }
    }

}

export default rootReducer;