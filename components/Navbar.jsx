import React from "react";
import "../styles/navbar.css"

const Navbar = () => {
    const navLinks = [
        { label: ".home", Link: "/" },
        { label: ".skills", Link: "/skills" },
        { label: ".work", Link: "/" },
        { label: ".resume", Link: "/" }
    ]


    return (
        <ul className="sidemenu">
            {navLinks.map((item, index) => (
                <li key={index}>
                    <a href={item.Link}>{item.label}</a>
                </li>
            ))}
        </ul>
    )
}

export default Navbar