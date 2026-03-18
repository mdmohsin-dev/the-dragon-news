import { Link } from "react-router";

const DisplyCategoryNews = ({ singleNews }) => {
    const { title, author, details, image_url } = singleNews
    const formateDate = new Date(author.published_date).toLocaleDateString()
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
            <div>
                {details.length > 200 ? (<>
                    {details.slice(0, 200)}...
                    <br />
                    <Link className="text-red-500">Read more</Link>
                </>):details
                }
            </div>
        </div>

    );
};

export default DisplyCategoryNews;