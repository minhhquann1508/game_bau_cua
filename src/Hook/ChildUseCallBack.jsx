import React, { memo } from 'react'
function ChildUseCallBack(props) {
    let title = 'cyberlearn';
    let object = { id: 1, name: 'quân' };
    console.log(title, object);
    console.log('re-render');
    return (
        <div>
            <small>{props.renderNotify()}</small>
            <textarea></textarea>
            <br />
            <button className='btn btn-success'>Gửi</button>
        </div>
    )
}
export default memo(ChildUseCallBack);