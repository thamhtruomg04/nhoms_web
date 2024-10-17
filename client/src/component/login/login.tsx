import { useState } from 'react';
import './login.css'
const Login = ({ setIsLogin }: any) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e: any) => {
        e.preventDefault();
        // Xử lý đăng nhập
        console.log('Email:', email, 'Password:', password);
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <p onClick={() => setIsLogin("")} className='out-login'>&#10005;</p>
                <h2 className="auth-title">Login</h2>
                <form onSubmit={handleLogin}>
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
                    <button type="submit" className="auth-button">Login</button>
                </form>
                <p className="auth-switch">Don't have an account?
                    <span onClick={()=>setIsLogin("register")}>Sign up</span>
                </p>
            </div>
        </div>
    );
}

export default Login
