import { useSelector, useDispatch } from "react-redux";
import {
  setSuccessMessage,
  setErrorMessage,
  setIsResponse,
  setNotResponse,
  setNotLoading,
  setIsLoading,
} from "../actions/actionTypes";

const useLoading = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);

  const isLoading = () => dispatch(setIsLoading());

  const notLoading = () => dispatch(setNotLoading());

  return { loading, isLoading, notLoading };
};

const useResponse = () => {
  const dispatch = useDispatch();
  const response = useSelector((state) => state.response);

  const isResponse = () => dispatch(setIsResponse());

  const notResponse = () => dispatch(setNotResponse());

  return { response, isResponse, notResponse };
};

const useMsg = () => {
  const dispatch = useDispatch();
  const msg = useSelector((state) => state.msg);

  const successMsg = (text) => dispatch(setSuccessMessage(text));

  const errorMsg = (text) => dispatch(setErrorMessage(text));

  return { msg, successMsg, errorMsg };
};


const useUtils = () => {
  const { loading, isLoading, notLoading } = useLoading();
  const { response, isResponse, notResponse } = useResponse();
  const { msg, successMsg, errorMsg } = useMsg();

  return {
    loading,
    isLoading,
    notLoading,
    response,
    isResponse,
    notResponse,
    msg,
    successMsg,
    errorMsg,
  };
};

export { useUtils };
