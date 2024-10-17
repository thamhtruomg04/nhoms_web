import { useState } from 'react';
import './login.css'
const Signup = ({ setIsLogin }: any) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = (e: any) => {
        e.preventDefault();
        // Xử lý đăng ký
        console.log('Name:', name, 'Email:', email, 'Password:', password);
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <p onClick={() => setIsLogin("")} className='out-login'>&#10005;</p>
                <h2 className="auth-title">Sign Up</h2>
                <form onSubmit={handleSignup}>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="auth-input"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="auth-input"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="auth-input"
                    />
                    <button type="submit" className="auth-button">Sign Up</button>
                </form>
                <p className="auth-switch">Already have an account?
                    <span onClick={() => setIsLogin("login")}>Login</span>
                </p>
            </div>
        </div>
    );
}

export default Signup
