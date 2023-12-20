import React, { createContext, useState, } from 'react';

//Nguyễn Văn Phong -- 21522461

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = () => {
        if (email === '21522461@gm.uit.edu.vn' && password === '123123') {
            setIsAuthenticated(true);
            console.log(isAuthenticated);
        } else {
            alert('Sai thông tin đăng nhập');
        }
    };

    const logout = () => {
        setEmail('');
        setPassword('');
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider
            value={{
                email,
                setEmail,
                password,
                setPassword,
                isAuthenticated,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };