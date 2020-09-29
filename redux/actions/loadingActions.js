//Action Types
export const IS_LOADING = "IS_LOADING";
export const NOT_LOADING = "NOT_LOADING";


//Action Creator
export const isLoading = () => ({
   type: IS_LOADING
});

export const notLoading = () => ({
    type: NOT_LOADING
});