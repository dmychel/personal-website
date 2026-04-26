import { Link } from "react-router-dom";
import { useState } from "react";
import OpenMenu from "./OpenMenu";
import ClosedMenu from "./ClosedMenu";
import PropTypes from "prop-types";



function NavDropDown() {
    const [clicked, setClicked] = useState(false)


    return (
        <div>
            {clicked ? <OpenMenu setClicked={setClicked} /> : <ClosedMenu setClicked={setClicked} />}
        </div>


    )
}

export default NavDropDown;