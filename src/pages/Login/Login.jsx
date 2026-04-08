
import { Link, useNavigate } from 'react-router';
import Navbar from '../../components/Navbar/Navbar';
import { FcGoogle } from 'react-icons/fc';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const navigate = useNavigate()
    const { googleLogin } = useContext(AuthContext)

    const handleGoogleLogin = () => {
        googleLogin()
            .then(() => {
                navigate("/")
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <div className='max-w-lg mx-auto p-12 bg-base-200 mt-20 rounded-lg'>
                <h3 className='text-4xl font-semibold text-center'>Login your account</h3>
                <form className='pt-10'>
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
                <p className='pt-5'>Don't have any accoun? <Link to='/signup'
                    className='text-red-500 font-semibold'>Register</Link></p>
                <div className='flex flex-col justify-center items-center pt-5'>
                    <p className='text-accent font-medium'>Or Login with</p>
                    <button onClick={handleGoogleLogin}
                        className='pt-3 cursor-pointer'><FcGoogle size={34}></FcGoogle></button>
                </div>
            </div>
        </div>
    );
};

export default Login;