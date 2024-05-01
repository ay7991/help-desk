import * as React from 'react';
import Link from 'next/link';

const NavBar: React.FC = () => {
    return (
        <nav className="flex justify-end pr-20 pt-4">
            <Link href='/admin/login'> Admin </Link>
            <Link href='/' className="ml-12"> Submit Tickets </Link>
        </nav>
    );
}

export default NavBar;