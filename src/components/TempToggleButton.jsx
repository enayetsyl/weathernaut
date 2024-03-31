import { useState } from "react";
import { ToggleButton, ToggleButtonGroup} from "../constant/index";

import { useSharedContext } from '../context/SharedContext';

export default function TempToggleButton() {
  const { setUnit } = useSharedContext()
  const [alignment, setAlignment] = useState('celsius');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    if (newAlignment === 'celsius') {
      setUnit('celsius');
    } else if (newAlignment === 'fahrenheit') {
      setUnit('fahrenheit');
    }
  };

  return (
    <ToggleButtonGroup
      
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Temperature"
      sx={{
        backgroundColor:'rgb(96 165 250)'
      }}
    >
      <ToggleButton value="celsius">C</ToggleButton>
      <ToggleButton value="fahrenheit">F</ToggleButton>
     
    </ToggleButtonGroup>
  );
}