import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
    const navigate = useNavigate();

    const handleCreate = () => {
        navigate('/editor');
    }

    return (
        <>
            <h2>Introduction</h2>            
            <article>
                <p>
                This website allows users to create, review, update and delete email newsletters that contain content
                about articles, briefs and reports. Get started by clicking the button below!
                </p>
                <p>
                <button onClick={handleCreate}>Create New Newsletter</button>
                </p>
            </article>
        </>
    );
}

export default HomePage;
