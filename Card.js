import React, { Component } from 'react';
import Swal from 'sweetalert2'
import card from './businesscard1.jpg';

const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
        confirmButton: 'btn btncolor',
        cancelButton: 'btn btncolor'
    },
    buttonsStyling: true,
})

const swalWithBootstrapButtons1 = Swal.mixin({
    customClass: {
        confirmButton: 'btn btncolor'

    },
    buttonsStyling: true,
})

let timerInterval

export default class Card extends Component {

    actionPINCVP = () => {
        swalWithBootstrapButtons.fire({
            title: '<h4><b>Card Number & CVV</b></h4>',
            text: 'Please enter your PIN',
            cancelButtonText: 'View Card Num',
            confirmButtonText: 'View CVV',
            showCancelButton: true,
            input: 'password',
            inputAttributes: {
                autocapitalize: 'off'
            },
            preConfirm: (login) => {
                return fetch(`//api.github.com/users/${login}`)
                    .then(response => {
                        if (login != '4545') {
                            throw new Error(response.statusText)
                        }
                        return response.json()
                    })
                    .catch(error => {
                        swalWithBootstrapButtons.showValidationMessage(
                            `<h5>Authentication Failed : Worng Credential</h5>`
                        )
                    })
            },
            allowOutsideClick: () => !swalWithBootstrapButtons.isLoading()
        }).then((result) => {
            if (result.value) {
                swalWithBootstrapButtons.fire(
                    '<h4>CVV is: <b>076</b></h4>'

                )
            } else if (
                // Read more about handling dismissals
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    '5987 6534 6534 7654',
                    'Expiry date: 02/2020'

                )
            }

        })
    }

    cardless = () => {
        swalWithBootstrapButtons1.fire({
            title: '<h4><b>Cash Withdrawal</b></h4>',
            confirmButtonText: 'Generate OPT',
            input: 'password',
            inputAttributes: {
                autocapitalize: 'off'
            },
            preConfirm: (login) => {
                return fetch(`//api.github.com/users/${login}`)
                    .then(response => {
                        if (login != '4545') {
                            throw new Error(response.statusText)
                        }
                        return response.json()
                    })
                    .catch(error => {
                        swalWithBootstrapButtons1.showValidationMessage(
                            `<h5>Authentication Failed : Worng Credential</h5>`
                        )
                    })
            },
            allowOutsideClick: () => !swalWithBootstrapButtons1.isLoading()
        }).then((result) => {
            Swal.fire({
                title: '<h4>Your OTP for this transaction is <b>8752</b> </h4>',
                html: 'This PIN will expire in <strong></strong> seconds.<br/><br/>',
                timer: 10000,
                onBeforeOpen: () => {
                    Swal.showLoading()
                    timerInterval = setInterval(() => {
                        Swal.getContent().querySelector('strong')
                            .textContent = (Swal.getTimerLeft() / 1000)
                                .toFixed(0)
                    }, 100)
                },
                onClose: () => {
                    clearInterval(timerInterval)
                }
            })
        })

    }

    addMoney = () => {
        swalWithBootstrapButtons.fire({
            type: 'info',
            text: 'This feature is coming soon!'
        })
    }
    render() {

        return (
            <div className='card'>
                <h2 className='cardshadow color1'>£65.23</h2>
                <div className='cardtext'>Personal account</div>
                <img src={card} alt='card' width='300px' />
                <div>&nbsp;</div>
                <div className='row'>
                    <div className='col-xs-2'>
                    </div>

                    <div className='col-xs-3'>
                        <span class="fa-stack fa-lg">
                            <i class="fa fa-circle-thin fa-stack-2x pluscolor cardshadow" onClick={this.actionPINCVP}></i>
                            <i class="fa fa-eye pluscolor" ></i>
                        </span>
                        <h6 className='pluscolor1'>Card No & CVV</h6>
                    </div>

                    <div className='col-xs-2'>
                        <span class="fa-stack fa-lg">
                            <i class="fa fa-circle-thin fa-stack-2x pluscolor cardshadow"></i>
                            <i class="fa fa-mobile fa-stack-1x pluscolor" onClick={this.cardless}></i>
                        </span>
                        <h6 className='pluscolor1'>Cardless Cash Withdrawal</h6>
                    </div>
                    <div className='col-xs-2'>
                        <span class="fa-stack fa-lg">
                            <i class="fa fa-circle-thin fa-stack-2x pluscolor cardshadow" ></i>
                            <i class="fa fa-list-alt fa-stack-1x pluscolor" onClick={this.addMoney} ></i>
                        </span>
                        <h6 className='pluscolor1'>Manage Card</h6>
                    </div>
                    <div className='col-xs-2'>
                    </div>
                </div>
            </div>
        );

    }
}

