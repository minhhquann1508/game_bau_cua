import { add_new_comment } from "../types/FakeBook";

export const addNewCommentAction = (newComment) => ({
    type: add_new_comment,
    newComment
})
