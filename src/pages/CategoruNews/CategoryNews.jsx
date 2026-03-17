import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import DisplyCategoryNews from './DisplyCategoryNews';

const CategoryNews = () => {

    const { id } = useParams()
    const newsData = useLoaderData()

    const [news, setNews] = useState([])

    useEffect(() => {
        if (id == '0') {
            setNews(newsData)
        }
        else {
            const filterNews = newsData.filter(news => news.category_id === Number(id))
            setNews(filterNews)
        }
    }, [id, newsData])

    console.log(news)
    return (
        <div>
            {
                news.map(singleNews => <DisplyCategoryNews singleNews={singleNews}></DisplyCategoryNews>)
            }
        </div>
    );
};

export default CategoryNews;