import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export const Searchbar = () => {
  return (
    <div>
      <input type="text" />
      <FormControl>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel value="Name" control={<Radio />} label="Name" />
          <FormControlLabel
            value="Ingredients"
            control={<Radio />}
            label="Ingredients"
          />
          <FormControlLabel
            value="Cuisine"
            control={<Radio />}
            label="Cuisine"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};
