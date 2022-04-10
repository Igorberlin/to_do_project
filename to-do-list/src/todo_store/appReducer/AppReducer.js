import AppActionType from "./AppAction";

const init = {
    isLoading: false,
};

const appReducer = (state = init, { type }) => {
    switch (type) {
        case AppActionType.showLoader:
            return {
                ...state,
                isLoading: true,
            };
        case AppActionType.hideLoader:
            return {
                ...state,
                isLoading: false,
            };
        default:
            return state;
    }
};
export default appReducer;
