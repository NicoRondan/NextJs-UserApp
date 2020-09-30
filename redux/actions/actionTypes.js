//Loading actions
export const IS_LOADING = "IS_LOADING";
export const NOT_LOADING = "NOT_LOADING";

//Response actions
export const IS_RESPONSE = "IS_RESPONSE";
export const NOT_RESPONSE = "NOT_RESPONSE";

//Messages actions
export const SUCCESS_MESSAGE = "SUCCESS_MESSAGE";
export const ERROR_MESSAGE = "ERROR_MESSAGE";



//Action creators
const setIsLoading = () => {
  return { type: IS_LOADING };
};

const setNotLoading = () => {
  return { type: NOT_LOADING };
};

const setSuccessMessage = (text) => {
  return {
    type: SUCCESS_MESSAGE,
    text,
  };
};

const setErrorMessage = (text) => {
  return {
    type: ERROR_MESSAGE,
    text,
  };
};

const setIsResponse = () => {
  return { type: IS_RESPONSE };
};

const setNotResponse = () => {
  return { type: NOT_RESPONSE };
};

export { setSuccessMessage, setErrorMessage, setIsResponse, setNotResponse, setIsLoading, setNotLoading};
