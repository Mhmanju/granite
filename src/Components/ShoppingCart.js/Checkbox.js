import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

export default function Checkboxes({handleChange}) {
  

  return (
    <div className="Checkbox">
      <Checkbox
        
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      
    </div>
  );
}
