import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IRepo} from "../../types";

const LS_FAV_KEY = 'rfk'

interface GithubState {
    favourites: IRepo[]
}

const initialState: GithubState = {
    favourites: JSON.parse(localStorage.getItem(LS_FAV_KEY) ?? '[]')
}

export const gitHubSlice = createSlice({
    name: 'github',
    initialState,
    reducers: {
        addFavourite(state, action: PayloadAction<IRepo>) {
            state.favourites.push(action.payload)
            console.log(action.payload)
            localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites))
        },
        removeFavourite(state, action: PayloadAction<IRepo>) {
            state.favourites = state.favourites.filter(f => f !== action.payload)
            localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites))
        }
    }
})

export const gitHubActions = gitHubSlice.actions
export const gitHubReducer = gitHubSlice.reducer