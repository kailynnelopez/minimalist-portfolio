import React from 'react';

function Footer() {
    return (
        <div className='py-5 text-center'>
            {/* Socials Icons */}
            <p className='text-sm mt-2 opacity-50'>
                &copy; {new Date().getFullYear()} 
                Kailynne Lopez.  All rights reserved.
            </p>
        </div>
    )
}

export default Footer;