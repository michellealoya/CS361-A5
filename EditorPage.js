import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SectionsTable from '../components/SectionsTable.js';

function EditorPage({ setSection}) {
    // Use the Navigate for redirection
    const navigate = useNavigate();

    // Use state to bring in the data
    const [sections, setSections] = useState([]);

    // RETRIEVE the entire list of sections
    const fetchSections = async () => {
        const res = await fetch('/sectionData');
        const data = await res.json();
        setSections(data);
    };

    // UPDATE a single section
    const handleEdit = async section => {
        setSection(section);
        navigate("/editSection");
    };

    // DELETE a single section
    const handleDelete = async _id => {
        const res = await fetch(`/sectionData/${_id}`, { method: 'DELETE' });
        if (res.status === 204) {
            const getResponse = await fetch('/sectionData');
            const sections = await getResponse.json();
            setSections(sections);
        } else {
            console.error(`Failed to delete section with id: ${_id}, status code: ${res.status}`);
        }
    };

    // LOAD all the sections
    useEffect(() => {
        fetchSections();
    }, []);

    // ADD a new section button
    const handleAddSection = () => {
        navigate('/addSection');
    }

    // CREATE the newsletter button
    const handleCreateNewsletter = () => {
        navigate('/editor');
    }

    // DISPLAY the sections
    return(
        <>
        <h2>Newsletter Editor</h2>
        <article>
            <p>
            This page allows you to build an email newsletter. Begin by filling out the newsletter project name and the subject line
            that will be displayed when the email is sent to subscribers. Then, begin creating sections using the Add Section button below. After
            you've created a section, you can view, edit or delete the section by clicking on the respective buttons found on the table.
            After you've created all your desired sections, use the Create Newsletter button found at the bottom to create the newsletter.
            </p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                    <fieldset>
                        <legend>Newsletter</legend>
                        <label for="project">Project name:</label>
                        <input
                            type="text"
                            placeholder="Newsletter #1"
                            id="project" />
                        
                        <label for="subjectLine">Subject line:</label>
                        <input
                            type="text"
                            placeholder="Summer Newsletter"                          
                            id="subjectLine" />
                    </fieldset>
                </form>
            <p>
            <button onClick={handleAddSection}>Add New Section +</button>
            </p>
            <SectionsTable sections={sections} onEdit={handleEdit} onDelete={handleDelete}/> 
            <p>
            <button onClick={handleCreateNewsletter}>Create the Newsletter</button>
            </p>
        </article>
        </>
    )
}

export default EditorPage;