import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddSectionPage() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [link, setLink] = useState('');
    const [image, setImage] = useState('');
    

    const navigate = useNavigate();

    const addSection = async () => {
        const newSection = { title, description, link, image };
        const res = await fetch('/sectionData', {
            method: 'post',
            body: JSON.stringify(newSection),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        
        console.log(res); 

        if (res.status === 201) {
            alert('New section created successfully!');
            navigate('/editor');
        } else {
            alert('Failed to create new section');
            navigate('/addSection');
        }
    };

    return (
        <div>
            <h2>Create</h2>
            <article>
                <p>Fill in the form below to create a new section for the newsletter:</p>
                <form onSubmit={(e) => { e.preventDefault();}}>
                    <fieldset>
                        <legend>New Section</legend>
                        <label for="title">Title:</label>
                        <input
                            type="text"
                            placeholder="ABC"
                            value={title}
                            onChange={e => setTitle(e.target.value)} 
                            id="title" />
                        
                        <label for="description">Content Description:</label>
                        <input
                            type="text"
                            value={description}
                            placeholder="In this..."
                            onChange={e => setDescription(e.target.value)} 
                            id="description" />

                        <label for="link">Paste the link to full article:</label>
                        <input
                            type="text"
                            placeholder="https://www.website.com/x"
                            value={link}
                            onChange={e => setLink(e.target.value)} 
                            id="link" />

                        <label for="image">Upload image file:</label>
                        <input
                            type="text"
                            placeholder="No image"
                            value={image}
                            onChange={e => setImage(e.target.value)} 
                            id="image" />

                        <label for="submit">
                        <button
                            type="submit"
                            onClick={addSection}
                            id="submit"
                        >Add</button></label>
                    </fieldset>
                </form>
                <p>Warning: Autosave has not been implemented. Please submit before you navigate to another page or your data will be lost.</p>
            </article>
        </div>
    );
}

export default AddSectionPage;