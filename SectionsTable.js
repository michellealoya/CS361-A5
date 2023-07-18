import React from 'react';
import SectionInfo from './SectionInfo';


function SectionsTable({ sections, onDelete, onEdit }) {
    
    return (
        <table id="sections">
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Content</th>
                    <th>Link</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {sections.map((section, i) => 
                    <SectionInfo 
                        section={section} 
                        key={i} 
                        onEdit={onEdit} 
                        onDelete={onDelete}
                    />)}
            </tbody>
        </table>
    );
}

export default SectionsTable;