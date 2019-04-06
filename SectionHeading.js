import React, { Component } from 'react';
class SectionHeading extends Component {


    render() {
        return (
            <div className='section-heading'>
                <h4 className='heading'>
                    <img src="" />
                    &nbsp;
                    Personal Account</h4>
                    <div className='balance'>&nbsp;&nbsp;&nbsp;Total Balance <b>£65.23</b></div>                    
            </div>
        );
    }


}

export default SectionHeading;