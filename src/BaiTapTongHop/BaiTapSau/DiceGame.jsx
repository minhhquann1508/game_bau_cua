import React from 'react'
import '../BaiTapSau/style.css'
import Point from './Point'
import ListItem from './ListItem'
import DiceList from './DiceList'
export default function DiceGame() {
    return (
        <div id='game' className='container-fluid'>
            <Point />
            <div className="row">
                <div className="col-8 text-center">
                    <ListItem />
                </div>
                <div className="col-4 text-center">
                    <DiceList />
                </div>
            </div>
        </div>
    )
}
