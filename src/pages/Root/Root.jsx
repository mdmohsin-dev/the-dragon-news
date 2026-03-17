import Header from '../../components/Header/Header';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className='max-w-360 mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;