import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { IoCreateOutline } from 'react-icons/io5';

function SectionInfo({ section, onDelete, onEdit }) {
  return (
    <tr>
      <td>{section.image}</td>
      <td>{section.title}</td>
      <td>{section.content}</td>
      <td>{section.link}</td>
      <td><IoCreateOutline onClick={() => onEdit(section)} /></td>
      <td><FaTrashAlt onClick={() => onDelete(section._id)} /></td>
    </tr>
  );
}

export default SectionInfo;