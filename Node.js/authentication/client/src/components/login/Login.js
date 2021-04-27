import Input from '../input/Input'
import { useState } from 'react';

const Login = () => {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    return (
        <div>
            <h2>Please log in</h2>
            <p>Email</p>
            <Input
                type='text'
                value={userEmail}
                setValue={setUserEmail}
            />
            <p>Password</p>
            <Input
                type='text'
                value={userPassword}
                setValue={setUserPassword}
            />
        </div>
    )
}

export default Login;