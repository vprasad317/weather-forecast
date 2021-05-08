import React from 'react';

function Footer() {
    return (
        <footer className="app-footer p-3">
            <div className="container">
            &copy; {new Date().getFullYear()}
            </div>
        </footer>
    )
}

export default Footer