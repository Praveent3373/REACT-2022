import Post from "../../models/postModel";
import ActionType from "./action-types";

interface PostRequestAction {
    type: ActionType.POST_REQUEST
}
interface PostSuccessAction {
    type: ActionType.POST_SUCCESS
    payload: Post[]
}
interface PostFailAction {
    type: ActionType.POST_FAIL,
    payload: string
}

export type Action = PostRequestAction | PostSuccessAction | PostFailAction