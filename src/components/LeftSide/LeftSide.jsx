import  { Suspense } from 'react';
import Categories from '../../pages/Categories/Categories';

const LeftSide = () => {
    return (
        <div>
           <Suspense fallback={<h1>Loading..</h1>}>
             <Categories></Categories>
           </Suspense>
        </div>
    );
};

export default LeftSide;