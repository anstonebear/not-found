import React from 'react';
import './index.scss'

const NotFound: React.FC = () => {
    return (
        <div className='notfound_box'>
            <div className="notfound_box-conteiner">
                <div className="notfound_box-title">
                    <span className="">404</span>
                </div>
                <div className="notfound_box-description">
                    <span className="">Sorry, we were unable to find that page</span>
                </div>
                
                    <button className="notfound_box-backbutton">Back to Sitename</button>
                
            </div>
        </div>
    );
};

export default NotFound;