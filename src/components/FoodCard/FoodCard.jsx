import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";
// import axios from "axios";


const FoodCard = ({ item }) => {
    const { name, image, price, recipe, _id } = item;


    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();   //array destructuring strategy

    const handleAddToCart = () => {
        if (user && user.email) {
            // TODO: send cart item to the database


            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                price,
                image
            }

            /*  axios.post('https://bistro-boss-server-pi-two.vercel.app/carts', cartItem)
                 .then(res => {
                     console.log(res.data);
                     if (res.data.insertedId) {
                         Swal.fire({
                             position: "top-end",
                             icon: "success",
                             title: `${name} has been added to cart`,
                             showConfirmButton: false,
                             timer: 1500
                         });
                     }
 
                 }) */

            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} has been added to cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        // refetch cart to update the cart items count
                        refetch();
                    }
                })

        } else {
            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                    confirmButton: "btn btn-success",
                    cancelButton: "btn btn-danger"
                },
                buttonsStyling: false
            });
            swalWithBootstrapButtons.fire({
                title: "You are not logged in",
                text: "Please login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes, login!",
                cancelButtonText: "No, cancel!",
                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } });
                } else if (
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    swalWithBootstrapButtons.fire({
                        title: "Cancelled",
                        text: "You didn't add this item :)",
                        icon: "error"
                    });
                }
            });
        }
    }

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-4">${price}</p>
                <div className="card-body flex flex-col items-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <button onClick={handleAddToCart} className="btn btn-outline border-0 border-b-4 mt-4 bg-slate-100 border-orange-400">Add to Cart</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FoodCard;