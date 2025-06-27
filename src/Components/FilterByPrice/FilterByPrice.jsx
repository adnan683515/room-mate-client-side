import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
    return `${value}°C`;
}

export default function FilterByPrice({ price, handleprice }) {
    return (
        <div>
            <h1>Filter By Price: </h1>
            <Box >
                <Slider
                    onChange={(e) => handleprice(parseInt(e.target.value))}
                    aria-label="Temperature"
                    defaultValue={30}
                    getAriaValueText={valuetext}
                    valueLabelDisplay="auto"
                    shiftStep={30}
                    step={10}
                    marks

                    min={price.lenght ? price[0] : 1000}
                    max={price.lenght ? price[1] : 5000}
                />

            </Box>
        </div>
    )
}