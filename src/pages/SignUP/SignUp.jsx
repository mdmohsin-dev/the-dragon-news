
import { Link } from 'react-router';
import Navbar from '../../components/Navbar/Navbar';

const SignUP = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <div className='max-w-lg mx-auto p-8 bg-base-200 mt-20 rounded-lg'>
                <h3 className='text-4xl font-semibold text-center'>Create your account</h3>
                <form className='pt-10'>
                    <div className="fieldset">
                        <legend className="fieldset-legend text-lg">Your name</legend>
                        <input type="text" className="input w-full" placeholder="Type here" />
                    </div>
                    <div className="fieldset">
                        <legend className="fieldset-legend text-lg">Email address</legend>
                        <input type="text" className="input w-full" placeholder="Type here" />
                    </div>
                    <div className="fieldset">
                        <legend className="fieldset-legend text-lg">Password</legend>
                        <input type="text" className="input w-full" placeholder="Type here" />
                    </div>
                    <button className='btn btn-primary w-full mt-8 py-5'>Login</button>
                </form>
                <p className='pt-5'>Already have any accoun? <Link to='/login'
                className='text-red-500 font-semibold'>Login</Link></p>
            </div>
        </div>
    );
};

export default SignUP;