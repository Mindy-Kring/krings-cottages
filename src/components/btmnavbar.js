import React from 'react'
import { Link } from 'gatsby'


const BtmNavbar = () => {

    const btmNavbar = {
    backgroundColor: "black",
    color: "white",
    padding: "10px",
    textAlign: "center"
}

return (

    <div>

<section style={btmNavbar}>
<p><Link to="/">Home |</Link><Link to="/cottages"> Cottages |</Link><Link to="/rates"> Rates | </Link><Link to="/gallery"> Gallery |</Link><Link to="/directions"> Directions |</Link><Link to="/contact"> Contact |</Link><Link to="/admin/"> Admin</Link></p>
</section>

    </div>


)


};

export default BtmNavbar;