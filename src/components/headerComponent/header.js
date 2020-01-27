import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';
import Logo from '../../Logo2.png'

class Header extends Component {
    render() {
        return (
            <header>

                <div className="logo">
                <img src={Logo} />
                </div>

                <nav>
                    <ul>
                        <li className="first">
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/Projects">Projects</Link>
                        </li>
                        <li>
                        <Link to="/About">About</Link>
                        </li>
                        <li className="last">
                        <Link to="/Contact">Contact</Link>
                        </li>
                    </ul>
                </nav>

            </header>
        );
    }
}

export default Header;
