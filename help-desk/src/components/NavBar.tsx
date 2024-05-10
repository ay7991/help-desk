import * as React from 'react';
import Link from 'next/link';

const NavBar: React.FC = () => {
    return (
        <nav id="navbar">
            <Link href='/admin/login'> Admin </Link>
            <Link href='/' className="ml-12"> Submit Tickets </Link>
        </nav>
    );
}

export default NavBar;