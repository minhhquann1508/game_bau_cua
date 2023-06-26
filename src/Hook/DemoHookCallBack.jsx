import React, { useState, useCallback } from 'react'
import ChildUseCallBack from './ChildUseCallBack'

export default function DemoHookCallBack(props) {
    let [like, setLike] = useState(1)
    const renderNotify = () => {
        return `Bạn đã thả ${like} ♥`;
    }
    const callBackRenderNotify = useCallback(renderNotify, [like])
    return (
        <div>
            Like: {like} ♥
            <br />
            <span style={{ cursor: 'pointer', color: 'red', fontSize: '35px' }}
                onClick={() => setLike(like + 1)}
            >♥</span>
            <br />
            <br />
            <ChildUseCallBack renderNotify={callBackRenderNotify} />
        </div>
    )
}
