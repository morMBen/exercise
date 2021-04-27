import Input from '../input/Input'
import { useState } from 'react';

const Login = () => {
    const [userFirst, setUserFirst] = useState('');
    const [userLast, setUserLast] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    return (
        <div>
            <h2>Please enter your details</h2>
            <p>First name</p>
            <Input
                type='text'
                value={userFirst}
                setValue={setUserFirst}
            />
            <p>Last name</p>
            <Input
                type='text'
                value={userLast}
                setValue={setUserLast}
            />
            <p>Phone number</p>
            <Input
                type='phone'
                value={userPhone}
                setValue={setUserPhone}
            />
            <p>Email</p>
            <Input
                type='email'
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