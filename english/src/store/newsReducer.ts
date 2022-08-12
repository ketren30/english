import { MainAction, NewsState } from "../type";
import * as actionTypes from "./actionTypes";

const initialState: NewsState = {
    news: [],
    loading: false,
    isVisible: false
}

const newsReducer = (
    state: NewsState,
    action: MainAction
):NewsState => {
    state = initialState;
    switch (action.type) {
        case actionTypes.fetchNews: 
        console.log(action.payload)
            return {...state, news: action.payload}
        case actionTypes.changeVisibility:
            return {...state, isVisible: !state.isVisible}
        case actionTypes.showLoading:
            return {...state, loading: true}
        case actionTypes.hideLoading:
            return {...state, loading: false}
    }
    return state
}

export default newsReducer