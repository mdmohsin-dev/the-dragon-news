import { useState } from "react";
import { useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
    const { id } = useParams()
    const newsData = useLoaderData()

    const selectNews = newsData.find(n => n.id == id)

    const { title, author, details, image_url } = selectNews

    return (
        <div className="border border-base-300 mb-8 p-5 rounded-lg
        ">
            {/* <div>
                <div className="flex gap-3">
                    <img className="w-10 h-10 rounded-full" src={author.img} alt="" />
                    <div>
                        <h3 className="font-semibold">{author.name}</h3>
                        <p>{formateDate}</p>
                    </div>
                </div>
            </div> */}
            {
                image_url && <img className="w-full rounded-lg" src={image_url} alt="" />
            }
            <h3 className="text-xl font-bold pt-6">{title}</h3>
            <p className="pt-4">{details}</p>
        </div>
    );
};

export default NewsDetails;