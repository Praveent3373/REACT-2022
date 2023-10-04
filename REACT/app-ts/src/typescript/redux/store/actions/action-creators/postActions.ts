import axios from "axios";
import { Dispatch } from "react";
import { Action } from "..";
import Post from "../../../models/postModel";
import ActionType from "../action-types";

export const getPosts = () => async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({
        type: ActionType.POST_REQUEST
      });
  
      const { data } = await axios.get<Post[]>(
        "https://jsonplaceholder.typicode.com/posts?_limit=10"
      );
  
      dispatch({
        type: ActionType.POST_SUCCESS,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.POST_FAIL,
        payload: error.message,
      });
    }
  };