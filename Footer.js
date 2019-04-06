import React,{Component} from 'react';
import Swal from 'sweetalert2'


const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
        confirmButton: 'btn btncolor',        
    },
    buttonsStyling: false               
})

class Footer extends Component{

    footer = () => {
        swalWithBootstrapButtons.fire({
            type: 'info',
            text: 'This feature is coming soon!'
            
        })
    }

    render(){
        return(
            <div className='footer'>
            <div className='row'>            
            <div className='col-xs-3'>
            <i class="fa fa-home fa-2x pluscolor"></i>
            <p>Home</p>
            </div>
            <div className='col-xs-3'>
            <i class="fa fa-pie-chart fa-2x" onClick={this.footer}></i>
            <p>Summary</p>
            </div>
            <div className='col-xs-3'>
            <i class="fa fa-users fa-2x" onClick={this.footer}></i>
            <p>Payments</p>
            </div>
            <div className='col-xs-3'>
            <i class="fa fa-question-circle-o fa-2x" onClick={this.footer}></i>
            <div>Help</div>
            </div>            
            </div>
            </div>
        )
    }

}

export default Footer;