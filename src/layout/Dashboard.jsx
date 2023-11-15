import { FaAd, FaCalendar, FaHome, FaList, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const DashBoard = () => {
    return (
        <div className="flex">
            {/* dashboard side bad */}
            <div className="h-64 min-h-screen bg-orange-400">
                <ui className="menu">
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
                        My Cart</NavLink>
                    </li>
                    <li><NavLink to={'/dashboard/review'}>
                        <FaAd></FaAd>
                        Add a Review</NavLink>
                    </li>
                    <li><NavLink to={'/dashboard/bookings'}>
                        <FaList></FaList>
                        My Bookings</NavLink>
                    </li>
                </ui>
            </div>
            {/* dashboard side bar */}
            <div className="flex-1">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default DashBoard;