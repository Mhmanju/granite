import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

export default function Checkboxes() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="Checkbox">
      <Checkbox
        
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      
    </div>
  );
}
