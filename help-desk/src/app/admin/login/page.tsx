import * as React from 'react';

const login: React.FC = () => {
    return (
        <form>
            <input type="text" placeholder="email" name="email" />
            <input type="text" placeholder="password" name="password" />
            <input type="text" placeholder="admin key" name="adminKey" />
        </form>
    );
}

export default login;