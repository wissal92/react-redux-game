import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './NotFound.css';

class NotFound extends Component {

    render() {
        return (
             <div className='notFound'>
                <h1 className='err-code'>404</h1>
                <h1 className="notFound-h1">Oops! That page can’t be found.</h1>
                <p className="notFound-p">
                    It looks like nothing was found at this location.
                     Maybe try to press go back to go to the previous page..
                </p>
                <Link className='notFound-btn' to='/'>Go Back!</Link>
            </div>
        );
    }
}

export default NotFound;