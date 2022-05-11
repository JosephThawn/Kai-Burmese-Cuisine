import React from 'react';
import './Contact.css'


const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <ul>
                    <li className='nav-item'>
                        <a href='#about'>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about'>About</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#testimonials'>Menu</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#demo'>Contact</a>
                    </li>
                </ul>
                <div className='bottom'>
                    <h3>Our Address</h3>
                    <address>
                        6912 S Lewis Ave,<br/>
                         Tulsa, OK 74136
                    </address>
                                  
                </div>
                <div className='phone'>
                    <a role="button" className="btn btn-link" href="tel:+12065551234"><i            
                        className="fa fa-phone" /> (918) 559-7899</a><br />
                    <a role="button" className="btn btn-link" href="mailto:fakeemail@fakeemail.co"><i className="fa fa-envelope-o" /> kaiburmese@gmail.com</a>
                </div>     

                <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" rel="stylesheet" />
                <div className="container">
                    <a href="/" className="btn btn-social-icon btn-twitter" target="_blank">
                         <span className="fa-stack fa-lg">
                            <i className="fa fa-square-o fa-stack-2x"></i>
                            <i className="fa fa-facebook fa-stack-1x"></i>
                        </span>
                    </a>
                    <a href="/" className="btn btn-social-icon btn-instagram" target="_blank">
                        <span className="fa-stack fa-lg">
                            <i className="fa fa-square-o fa-stack-2x"></i>
                            <i className="fa fa-instagram fa-stack-1x"></i>
                        </span>
                    </a>
                    <a href="/" className="btn btn-social-icon btn-youtube" target="_blank">
                        <span className="fa-stack fa-lg">
                            <i className="fa fa-square-o fa-stack-2x"></i>
                            <i className="fa fa-youtube-square fa-stack-1x"></i>
                        </span>
                    </a>
                    <a href="/" className="btn btn-social-icon btn-twitter" target="_blank">
                        <span className="fa-stack fa-lg">
                            <i className="fa fa-square-o fa-stack-2x"></i>
                            <i className="fa fa-twitter-square fa-stack-1x"></i>
                        </span>
                    </a>
                </div>
        
            </div>
        </div>
    )
}

export default Footer
