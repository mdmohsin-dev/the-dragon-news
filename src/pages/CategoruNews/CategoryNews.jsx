import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import DisplyCategoryNews from './DisplyCategoryNews';

const CategoryNews = () => {

    const { id } = useParams()
    const newsData = useLoaderData()
    const breakingNews = newsData.filter(breking => breking.others.is_today_pick)

    const [news, setNews] = useState([])

    useEffect(() => {
        if (id == '0') {
            setNews(newsData)
        }
        else if (id == '1') {
            setNews(breakingNews)
        }
        else {
            const filterNews = newsData.filter(news => news.category_id === Number(id))
            setNews(filterNews)
        }
    }, [id, newsData])

    
    return (
        <div>
            {
                news.map(singleNews => <DisplyCategoryNews singleNews={singleNews}></DisplyCategoryNews>)
            }
        </div>
    );
};

export default CategoryNews;