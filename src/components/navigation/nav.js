import { Outlet, Link } from "react-router-dom"

const Nav = () => {

    return (
        <>
            <div className="nav" style={{background: 'yellow'}} >
                <Link to='/home' className="logo" >
                    <div>LOGO</div>
                </Link>
                <div className="navLinks">
                    <Link to='/toys' className="navLink">
                        TOYS
                    </Link>
                </div>

            </div>
            <Outlet />
        </>
    )
}

export default Nav