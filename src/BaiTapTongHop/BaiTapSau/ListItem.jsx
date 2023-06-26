import React from 'react'
import Item from './Item';
import { useSelector } from 'react-redux'
export default function ListItem() {
    const propsSelector = useSelector(state => state.diceReducer);
    const renderListItem = () => {
        return propsSelector.betList.map((item, index) => {
            return (
                <Item item={item} index={index} />
            )
        })
    }
    return (
        <div className=''>
            <div className="row mt-3">
                {renderListItem()}
            </div>
        </div>
    )
}
