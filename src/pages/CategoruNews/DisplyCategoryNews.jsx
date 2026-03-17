const DisplyCategoryNews = ({ singleNews }) => {
    const { title,author,thumbnail_url,image_url } = singleNews
    return (
        <div className="border border-base-300 mb-8">
            <div className="bg-base-300 p-4">
                <div className="flex gap-3">
                    <img className="w-10 h-10 rounded-full" src={author.img} alt="" />
                <div>
                    <h3>{author.name}</h3>
                    <p>{author.published_date}</p>
                </div>
                </div>
            </div>
            <div className="p-5">
                <h3 className="text-xl font-bold">{title}</h3>
                {
                    image_url&& <img className="w-full rounded-lg mt-4" src={image_url} alt="" />
                }
            </div>
        </div>
    );
};

export default DisplyCategoryNews;