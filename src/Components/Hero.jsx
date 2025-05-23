import { motion } from "framer-motion";

import { useEffect, useRef, useState } from "react";

const Hero = () => {
    return (
        <div className="w-full  ">
            <section className="lg:w-[96%] w-[90%]   py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8  mx-auto">
                <div>
                    <span className="block mb-4 text-xl md:text-sm font-medium">
                        <span className="text-2xl text-teal-600">Better</span> every day
                    </span>
                    <h3 className="text-3xl font-semibold">
                        Your Next Roommate is Just <br /> a Click  <span className="text-teal-600" >Away</span>
                    </h3>
                    <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
                        Tired of flaky <span className="text-3xl font-semibold text-teal-600">roommates</span>?
                        We help you find trustworthy, like-minded people to share your space with. No awkward surprises. Just good vibes and clean kitchens.

                        🔍 Search by location, budget, lifestyle & more
                        ✅ Verified profiles | 💬 Chat before moving | 🛏️ Real rooms listed
                    </p>

                </div>
                <ShuffleGrid />
            </section>
        </div>
    );
};

const shuffle = (array) => {
    let currentIndex = array.length,
        randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }

    return array;
};

const squareData = [
    {
        id: 1,
        src: "https://i.ibb.co/QjJ8xwTw/big-standard-with-balcony-room-mate-carla-1655-7f3c7db0a1f0a68ae31e3c92d1cb4158.webp",
    },
    {
        id: 2,
        src: "https://i.ibb.co/0pr7b5Q8/df725670-3916-4187-9551-43d093d3a8c6-roommate.webp",
    },
    {
        id: 3,
        src: "https://i.ibb.co/S1GMYbn/istockphoto-1167742531-612x612.jpg",
    },
    {
        id: 4,
        src: "https://i.ibb.co/TMScG96H/images-1.jpg",
    },
    {
        id: 5,
        src: "https://i.ibb.co/2LYh76d/images.jpg",
    },
    {
        id: 6,
        src: "https://i.ibb.co/fYmpnDKC/images-2.jpg",
    },
    {
        id: 7,
        src: "https://i.ibb.co/kskCZ28Z/istockphoto-1148874296-612x612.jpg",
    },
    {
        id: 8,
        src: "https://i.ibb.co/bgCqDkbT/Caitye-Davis.jpg",
    },
    {
        id: 9,
        src: "https://i.ibb.co/n8cHf9xZ/images-3.jpg",
    },
    {
        id: 10,
        src: "https://i.ibb.co/PsrT6R4q/roommatebanner.jpg",
    },
    {
        id: 11,
        src: "https://i.ibb.co/3mvQGBRY/126068621.jpg",
    },
    {
        id: 12,
        src: "https://i.ibb.co/b5W4ZXYc/istockphoto-976961064-612x612.jpg",
    },
    {
        id: 13,
        src: "https://i.ibb.co/2LYh76d/images.jpg",
    },
    {
        id: 14,
        src: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
    },
    {
        id: 15,
        src: "https://images.unsplash.com/photo-1606244864456-8bee63fce472?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=681&q=80",
    },
    {
        id: 16,
        src: "https://i.ibb.co/3mvQGBRY/126068621.jpg",
    },
];

const generateSquares = () => {
    return shuffle(squareData).map((sq) => (
        <motion.div
            key={sq.id}
            layout
            transition={{ duration: 1.5, type: "spring" }}
            className="w-full h-full"
            style={{
                backgroundImage: `url(${sq.src})`,
                backgroundSize: "cover",
            }}
        ></motion.div>
    ));
};

const ShuffleGrid = () => {
    const timeoutRef = useRef(null);
    const [squares, setSquares] = useState(generateSquares());

    useEffect(() => {
        shuffleSquares();

        return () => clearTimeout(timeoutRef.current);
    }, []);

    const shuffleSquares = () => {
        setSquares(generateSquares());

        timeoutRef.current = setTimeout(shuffleSquares, 3000);
    };

    return (
        <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
            {squares.map((sq) => sq)}
        </div>
    );
};

export default Hero;