import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { AuthContext } from '../../Provider/AuthContext';

export default function Chart() {
    const { mode } = React.useContext(AuthContext); // true = dark, false = light

    return (
        <div
            className={` w-full p-2 rounded-xl ${mode ? 'bg-gray-800 text-white' : 'bg-neutral-300 text-black'
                }`}
        >
            <PieChart
                colors={mode ? ['#14b8a6', '#ffffff', '#f97316'] : ['teal', 'black', 'orange']}
                series={[
                    {
                        data: [
                            { id: 0, value: 10, label: 'series A' },
                            { id: 1, value: 15, label: 'series B' },
                            { id: 2, value: 20, label: 'series C' },
                        ],
                    },
                ]}
                width={400}
                height={200}
            />
        </div>
    );
}
