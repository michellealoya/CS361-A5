import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function EditSectionPage({ sectionToEdit }) {
    
    const [ticker, setTicker] = useState(sectionToEdit.ticker);
    const [price, setPrice] = useState(sectionToEdit.price);
    const [date, setDate] = useState(sectionToEdit.date);

    const navigate = useNavigate();

    const editSection = async () => {
        const res = await fetch(`sectionData/${sectionToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                ticker: ticker, 
                price: price, 
                date: date
            }),
            headers: {'Content-Type': 'application/json',},
        });
        
        if (res.status === 200) {
            alert('Section updated successfully!');
            
        } else {
            alert('Failed to update section');
        }
        navigate('/editor');
    };

    return (
        <div>
            <h2>Edit Section</h2>
            <article>
                <p>Edit the form below to update the section:</p>
                <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>Which information are you updating?</legend>
                    <label for="ticker">Ticker</label>
                    <input
                        type="text"
                        value={ticker}
                        onChange={e => setTicker(e.target.value)} 
                        id="ticker" />
                    
                    <label for="price">Price</label>
                    <input
                        type="number"
                        value={price}
                        onChange={e => setPrice(e.target.value)} 
                        id="price" />

                    <label for="date">Date</label>
                    <input
                        type="date"
                        value={date}
                        onChange={e => setDate(e.target.value)} 
                        id="date" />

                    <label for="submit">
                    <button
                        onClick={editSection}
                        id="submit"
                    >Update</button></label>
                </fieldset>
                </form>
            </article>
        </div>
    );
}

export default EditSectionPage;