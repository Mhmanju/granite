import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function GenderButtons() {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend"><b style={{ color:"black" }}>GENDER</b></FormLabel>
      <RadioGroup row aria-label="position" name="position" defaultValue="" style={{ color:"black" }}>
        <FormControlLabel  
          value="Male"
          control={<Radio color="primary" />}
          label="Male"
         
        />
        <FormControlLabel
          value="Female"
          control={<Radio color="primary"  />}
          label="Female"
         
        />
        <FormControlLabel
          value="Others"
          control={<Radio color="primary" />}
          label="Others"
          
        />
       
      </RadioGroup>
    </FormControl>
  );
}
