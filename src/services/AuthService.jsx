
import {jwtDecode} from 'jwt-decode';

export const LoginService = async (email, password) => {
    console.log(email, password);
    try {
        const response = await fetch('/api/v1/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (data.token) {
            const decodedData = jwtDecode(data.token);
            return {
                profile: decodedData.user,
                token: data.token
            };
        }
    } catch (error) {
        throw error;
    }
};

