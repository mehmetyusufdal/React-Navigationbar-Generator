import React, { useState, useEffect, useLayoutEffect } from 'react';
import './navbar.css';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

Navbargenerator.propTypes = {
    navitems : PropTypes.array.isRequired,
    TextClass: PropTypes.string,
    isFixedTop: PropTypes.bool,
}

Navbargenerator.defaultProps = {
    navitems: [
        {
            title: "HOME",
            href: "/"
        }
    ],
    TextClass: "text-light",
    isFixedTop: false,
}

function CreateNavitem(navlinks, TextClass) {
    return navlinks.map((item) => {
        return(
            <div key={navlinks.indexOf(item)} className="col col-12 col-sm-12 col-md text-center">
                <Link to={item["path"]} className={TextClass + " navtext"}> {item["title"]} </Link>
            </div>
        );
    });
}

export default function Navbargenerator(props) {

    const [WindowSize, setWindowSize] = useState([0,0]); // [Width, Height]
    const [Isvis, setIsvis] = useState(false); // Menu icons visibility. If menu closed, downward arrow become invisible and upward arrow become visible
    const [ScrollClass, setScrollClass] = useState(" navigationbar");
    var navclasses = "conteiner-fluid disablecopy";

    if(props.isFixedTop){
        navclasses += " fixed-top";
    }

    useLayoutEffect(() =>{ // Gets window's width and height when it changes
        function updateWindowSize() {
            setWindowSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateWindowSize);
        updateWindowSize();

        return () => window.removeEventListener('resize', updateWindowSize);
    }, []);

    useEffect(() =>{ // To darken navbar when page scrolled
        function _onScroll() {
            if(window.scrollY > 0){
                setScrollClass(" navigationbarScrolled");
            }
            else{
                setScrollClass(" navigationbar");
            }
        }
        window.addEventListener('scroll', _onScroll);

        return () => window.removeEventListener('scroll', _onScroll);

    }, []);

    if(WindowSize[0] < 768){ // When width smaller then md, switch navbar to dropdown menu
        return (
            <div  className={navclasses + ScrollClass}>
                {Isvis ? 
                    <div className="row justify-content-start">
                        <div onClick={() => setIsvis(!Isvis)}>
                            <i className="fas fa-angle-double-up fa-2x menuicon"/>
                        </div>
                        {CreateNavitem(props.navitems, props.TextClass)}
                    </div>
                    :
                    <div className="row justify-content-start">
                        <div onClick={() => setIsvis(!Isvis)}>
                            <i className="fas fa-angle-double-down fa-2x menuicon"/>
                        </div>
                    </div>
                }
                    
            </div>
        )
    }
    else{
        return (
            <div  className={navclasses + ScrollClass}>
                <div className="row justify-content-start">
                    {CreateNavitem(props.navitems, props.TextClass)}
                </div>
            </div>
        )
    }
}
