import { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const DisplyCategoryNews = ({ singleNews }) => {
    const { user } = useContext(AuthContext)
    const { title, author, details, image_url, id } = singleNews
    const formateDate = new Date(author.published_date).toLocaleDateString()
    const navigate = useNavigate()

    const handleReadMore = () => {
        if (!user) {
            Swal.fire({
                title: "You’re not logged in !",
                text: "Please log in to view the full news details.",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login Now",
                cancelButtonText: "No Thanks"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login")
                }
            });
        }
        else {
            navigate(`/newsDetails/${id}`)
        }
    }

    return (
        <div className="border border-base-300 mb-8 p-5 rounded-lg
        ">
            <div>
                <div className="flex gap-3">
                    <img className="w-10 h-10 rounded-full" src={author.img} alt="" />
                    <div>
                        <h3 className="font-semibold">{author.name}</h3>
                        <p>{formateDate}</p>
                    </div>
                </div>
            </div>
            <h3 className="text-xl font-bold pt-3">{title}</h3>
            {
                image_url && <img className="w-full rounded-lg mt-4" src={image_url} alt="" />
            }
            <div className="pt-4">
                {details.length > 200 ? (<>
                    {details.slice(0, 200)}...
                    <br />
                    <button onClick={handleReadMore}
                        className="text-red-500 cursor-pointer">Read more</button>
                </>) : details
                }
            </div>
        </div>

    );
};

export default DisplyCategoryNews;