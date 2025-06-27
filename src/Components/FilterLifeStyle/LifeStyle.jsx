import React from 'react';

const LifeStyle = ({ mode,handleLifeStyleOnchange }) => {
    return (
        <select onChange={(e)=>handleLifeStyleOnchange(e.target.value)}
            required
            name="life"
            defaultValue="Pick a Runtime"
            className={`select w-full ${mode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}
        >
            <option disabled={true}>Select Your Life Styles</option>
            <option value="🐱 Cat lover">🐱 Cat lover</option>
            <option value="Non-smoker">Non-smoker</option>
            <option value="Smoker">Smoker</option>
            <option value="⚡Flexible sleeper (no specific routine)">
                ⚡ Flexible sleeper (no specific routine)
            </option>
            <option value="📖 Study Lover">📖 Study Lover</option>
        </select>
    );
};

export default LifeStyle;
