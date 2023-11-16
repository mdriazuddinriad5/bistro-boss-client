import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";


const DashBoard = () => {
    const [cart] = useCart();

    // TODO: get isAdmin value from database
    const isAdmin= true;

    return (
        <div className="flex">
            {/* dashboard side bad */}
            <div className="h-64 min-h-screen bg-orange-400">
             
                <ui className="menu">
                {
                    isAdmin ? 
                    <>
                     <li><NavLink to={'/dashboard/adminHome'}>
                        <FaHome></FaHome>
                        Admin Home</NavLink>
                    </li>
                    <li><NavLink to={'/dashboard/addItems'}>
                        <FaUtensils></FaUtensils>
                        Add Items</NavLink>
                    </li>
                    <li><NavLink to={'/dashboard/manageItems'}>
                        <FaList></FaList>
                        Manage Items</NavLink>
                    </li>
                    <li><NavLink to={'/dashboard/bookings'}>
                        <FaBook></FaBook>
                        Manage Bookings</NavLink>
                    </li>
                    <li><NavLink to={'/dashboard/users'}>
                        <FaUsers></FaUsers>
                        All Users</NavLink>
                    </li>
                    </>
                    :
                    <>
                     <li><NavLink to={'/dashboard/userHome'}>
                        <FaHome></FaHome>
                        User Home</NavLink>
                    </li>
                    <li><NavLink to={'/dashboard/reservation'}>
                        <FaCalendar></FaCalendar>
                        Reservation</NavLink>
                    </li>
                    <li><NavLink to={'/dashboard/cart'}>
                        <FaShoppingCart></FaShoppingCart>
                        My Cart ({cart.length})</NavLink>
                    </li>
                    <li><NavLink to={'/dashboard/review'}>
                        <FaAd></FaAd>
                        Add a Review</NavLink>
                    </li>
                    <li><NavLink to={'/dashboard/bookings'}>
                        <FaList></FaList>
                        My Bookings</NavLink>
                    </li>
                    </>
                }
                   
                    <div className="divider"></div>
                    {/* shared nav link */}
                    <li><NavLink to={'/'}>
                        <FaHome></FaHome>
                        Home</NavLink>
                    </li>
                    <li><NavLink to={'/order/salad'}>
                        <FaSearch></FaSearch>
                        Menu</NavLink>
                    </li>
                    <li><NavLink to={'/order/contact'}>
                        <FaEnvelope></FaEnvelope>
                        Contact</NavLink>
                    </li>
                </ui>
            </div>
            {/* dashboard side bar */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default DashBoard;