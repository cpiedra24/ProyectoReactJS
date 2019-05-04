import React from 'react';
import '../App.css';


function Navigation() {
    return (
        <div className="App">
            <header>
                <nav id="navPrincipal">
                    <div className="nav-wrapper">
                        <a href="#" className="brand-logo">Logo Fundacion</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="sass.html">Proyectos</a></li>
                            <li><a href="badges.html">Nosotros</a></li>
                            <li><a href="collapsible.html">Videos</a></li>
                        </ul>
                    </div>
                </nav>

            </header>
        </div>
    );
}
export default Navigation;