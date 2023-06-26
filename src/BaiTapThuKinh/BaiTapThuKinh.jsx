import React, { Component } from 'react';
import data from '../data/dataGlasses.json';
import '../BaiTapThuKinh/BaiTapThuKinh.css'
export default class BaiTapThuKinh extends Component {
    renderGlassesList = () => {
        return data.map((glass, index) => {
            return (
                <div key={index} className='p-2' style={{ border: '1px solid #ccc' }}>
                    <img src={glass.url} alt={glass.url} style={{ width: '80px', cursor: 'pointer' }} onClick={() => this.handleChangeGlass(glass)} />
                </div>
            )
        })
    }
    state = {
        glassCurrent:
        {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./img/glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    }
    handleChangeGlass = (glass) => {
        let newGlass = glass;
        this.setState({
            glassCurrent: newGlass
        })
    }
    render() {
        const keyFrames = `@keyframes animateGlasses${Date.now()} {
            from {
                width: 0;
                transform:rotate(45deg);
            }
            to {
                width: 120px;
                transform:rotate(0deg);
            }
        }`


        const glassesStyle = {
            position: 'absolute',
            width: '120px',
            top: '80px',
            left: '227px',
            animation: `animateGlasses${Date.now()} 1s`
        }
        const glassesDesc = {
            width: '250px',
            top: '-100px',
            left: '145px',
            height: '100px',
            backgroundColor: 'rgba(255,127,0,0.5)',
            padding: '12px',
            textAlign: 'left'
        }
        return (
            <div style={{ position: 'fixed', width: '100%', height: '100%', backgroundImage: 'url(./img/glassesImage/background.jpg)', backgroundSize: '100%' }}>
                <style>
                    {keyFrames}
                </style>
                <div style={{ position: 'fixed', width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.6)' }}>
                    <h3 className='text-center text-light p-5' style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>TRY GLASSES APP ONLINE</h3>
                    <div className="container">
                        <div className="row mt-5 text-center">
                            <div className="col-6">
                                <img src="./img/glassesImage/model.jpg" alt="model" style={{ width: '250px', position: 'relative' }} />
                                <img src={this.state.glassCurrent.url} alt="kinh" style={glassesStyle} />
                                <div className='position-relative' style={glassesDesc}>
                                    <p style={{ color: '#AB82FC', fontWeight: 500 }} className='my-0'>Tên kính:{this.state.glassCurrent.name}</p>
                                    <span style={{ fontSize: '13px', fontWeight: '400' }}>Giá:{this.state.glassCurrent.price}$</span>
                                </div>
                            </div>
                            <div className="col-6">
                                <img src="./img/glassesImage/model.jpg" alt="model" style={{ width: '250px' }} />
                            </div>
                        </div>
                        <div className="glasses-list bg-light container text-center d-flex py-5" style={{ justifyContent: 'space-around' }}>
                            {this.renderGlassesList()}
                        </div>
                    </div>

                </div>
            </div >
        )
    }
}
