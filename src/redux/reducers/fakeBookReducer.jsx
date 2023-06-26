import { add_new_comment } from "../types/FakeBook";

const stateDefault = {
    comments: [
        { name: 'Yone', content: 'hi bro', avatar: 'https://i.pravatar.cc/150?u=yone@pravatar.com' },
        { name: 'Yasuo', content: 'hi con c', avatar: 'https://i.pravatar.cc/150?u=yasuo@pravatar.com' },
    ]
}

export const FakebookReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case add_new_comment: {

            let newCommentsList = [...state.comments, action.newComment];
            state.comments = newCommentsList;
            return { ...state };
        }
        default: {
            return { ...state };
        }
    }
}

