import React, { Component } from 'react';
import Swal from 'sweetalert2'
import image from './avatar.png';

const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
        confirmButton: 'btn btncolor',
    },
    buttonsStyling: false
})

class Profile extends Component {

    addMoney = () => {
        swalWithBootstrapButtons.fire({
            type: 'info',
            text: 'This feature is coming soon!'           
        })
    }

    render() {
        return (
            <div>
                <div className='profile'>
                    <div className='row'>
                        <img className='col-xs-3' src={image} alt='' />
                        {/* <div className='col-xs-3'><i class="fa fa-3x fa-user-o pluscolor"></i></div>             */}
                        <div className='col-xs-6'>Aravinth Dharmalingam</div>
                        <div className='col-xs-3 color' onClick={this.addMoney}>PROFILE</div>
                    </div>
                    <div className='line' />
                </div>
                <div className='money row'>
                    <div className='pluscolor col-xs-3'><i class="fa fa-2x fa-plus-square cardshadow" onClick={this.addMoney}></i></div>
                    <div className='col-xs-9 color'><b>Add money</b></div>
                </div>
                <div className='profile1'>
                    <div className='row'>
                        <div className='col-xs-3'></div>
                        <h5 className='col-xs-6 lineheight'>&nbsp;&nbsp;&nbsp;lloyds.me/</h5>
                    </div>
                    <div className='row'>
                        <div className='col-xs-3'></div>
                        <h5 className='col-xs-6 lineheight'>&nbsp;&nbsp;&nbsp;aravinthdharmalingam</h5>
                    </div>
                    <div className='row'>
                        <div className='col-xs-3'></div>
                        <h5 className='col-xs-9 lineheight'>&nbsp;&nbsp;&nbsp;04-00-04   &nbsp;&nbsp;&nbsp;75126269</h5>

                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;