import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <> 
      <nav class="nav"> 
         <Link to="/">Home</Link>
         <Link to="../editor">Editor</Link>
         {/*<Link to="../addSection">Add</Link>*/}
         {/*<Link to="../editSection">Edit</Link>*/}
      </nav>
    </>
  );
}

export default Nav;