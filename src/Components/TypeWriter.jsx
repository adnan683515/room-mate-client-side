import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

export const TypeWriter = () => {
    const [text] = useTypewriter({
        words: ['Welcome', 'To', 'Our', 'Exclusive Site!'],
        loop: 3,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
    })

    return (
        <div className='App'>
            <span>{text}</span>
            <Cursor cursorColor='teal' />
        </div>
    )
}