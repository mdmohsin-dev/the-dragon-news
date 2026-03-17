import { use } from 'react';
import { NavLink } from 'react-router';
const categoriesPromis = fetch("/categories.json").then(res => res.json())
const Categories = () => {
    const categories = use(categoriesPromis)
    return (
        <div>
            <h3 className="text-[#403F3F] text-xl font-semibold">All Categories {categories.length}</h3>
            <div className='flex flex-col gap-4 sidenav'>
                {
                    categories.map(category => <ul className='gird gap-4'><li className=''><NavLink 
                        to={`/category/${category.id}`}
                        key={category.id} 
                        className="w-full rounded-lg flex justify-start p-4 text-accent border-none hover:bg-base-300">{category.name}</NavLink></li></ul> )
                }
            </div>
        </div>
    );
};

export default Categories;