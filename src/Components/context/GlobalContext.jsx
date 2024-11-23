import { createContext, useReducer, useContext, useEffect } from "react";
import { reducer } from "./reducer";

const initialState = {
    watchlist : localStorage.getItem('watchlist') ? JSON.parse(localStorage.getItem("watchlist")) : [],
    watched : localStorage.getItem("watched") ? JSON.parse(localStorage.getItem("watched")) : []
}

export const GlobalContext = createContext(initialState);

const ContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        localStorage.setItem('watchlist' ,JSON.stringify(state.watchlist))
        localStorage.setItem('watched' , JSON.stringify(state.watched))
    },[state])
    return (
        <GlobalContext.Provider value={{
            watched : state.watched,
            watchlist : state.watchlist,
            MoviesDispatch : dispatch
        }}>
            {children}
        </GlobalContext.Provider>
    )

}

export default ContextProvider;

export const useMovieContext = () => useContext(GlobalContext)