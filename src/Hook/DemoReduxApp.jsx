import React, { useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { addNewCommentAction } from '../redux/actions/FakeBookAction'
export default function DemoReduxApp(props) {
    let comments = useSelector(state => state.FakebookReducer.comments)

    //Dispatch từ useDispatch
    let dispatch = useDispatch()

    //Lấy thông tin người dùng nhập vào
    let [userComments, setUserComments] = useState({
        name: '',
        comment: '',
        avatar: ''
    })

    let handleChange = (e) => {
        let { name, value } = e.target;
        setUserComments({
            ...userComments,
            [name]: value
        })
    }
    let handleComment = (e) => {
        e.preventDefault();
        let newComment = { ...userComments, avatar: `https://i.pravatar.cc/150?u=${userComments.name}@pravatar.com` }
        dispatch(addNewCommentAction(newComment))
    }


    return (
        <div className='container'>
            <h3>Fakebook App!</h3>
            <div className="card">
                <div className="card-header">
                    {comments.map((comment, index) => {
                        return (
                            <div className="row" key={index}>
                                <div className="col-1">
                                    <img src={comment.avatar} style={{ width: '50px', height: '50px' }} />
                                </div>
                                <div className="col-11">
                                    <h6 className='text-danger'>{comment.name}</h6>
                                    <p>{comment.content}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <form className="card-body" onSubmit={handleComment}>
                    <div className="form-group">
                        <h4>Name</h4>
                        <input type="text" name='name' onChange={(e) => handleChange(e)} className='form-control' />
                    </div>
                    <div className="form-group">
                        <h4>Content</h4>
                        <input type="text" name='content' className='form-control' onChange={(e) => handleChange(e)} />
                    </div>
                    <div className="form-group">
                        <button className='btn btn-success px-5'>Chat</button>
                    </div>
                </form>
            </div>

        </div>
    )
}
