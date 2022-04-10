import AppActionType from "./AppAction";

export const showLoader = () => {
    return {
        type: AppActionType.showLoader,
    };
};
export const hideLoader = () => {
    return {
        type: AppActionType.hideLoader,
    };
};
