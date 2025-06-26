import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const slides = [
    {
        img: "https://i.ibb.co/qYVBmH6Z/pexels-liza-summer-6347902.jpg",
        text: "Find your ideal roommate with just a few clicks!",
        subtext: "Start your roommate journey today.",
        buttonText: "Get Started",
    },
    {
        img: "https://i.ibb.co/TxVZqLq9/pexels-kampus-8057562.jpg",
        text: "Browse listings that match your lifestyle & budget.",
        subtext: "Smart filters. Easy matches.",
        buttonText: "Explore Now",
    },
    {
        img: "https://i.ibb.co/WpPykyBM/pexels-shvetsa-5711941.jpg",
        text: "Easy, secure and hassle-free roommate matching.",
        subtext: "Because your comfort matters most.",
        buttonText: "Join Free",
    },
];

const Slider = ({ onGetStartedClick }) => {
    return (
        <div className="w-[96%] mx-auto h-[50vh] sm:h-[80vh] max-h-[700px] overflow-hidden rounded-md">
            <AwesomeSlider bullets={false} organicArrows={true} className="h-full">
                {slides.map((slide, index) => (
                    <div key={index} className="relative w-full h-full">
                        {/* Background image */}
                        <img
                            src={slide.img}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-cover"
                        />

                        {/* Overlay Content */}
                        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center px-4 text-center">
                            {/* 👇 Extra text on top */}



                             {/* 👇 Main slide text */}
                            <h2 className="text-white sm:text-3xl lg:text-4xl font-bold mb-4 max-w-2xl leading-snug">
                                {slide.text}
                            </h2>
                            <p className="text-teal-200 text-sm sm:text-base md:text-lg mb-2">
                                {slide.subtext}
                            </p>

                           

                            {/* 👇 Button */}
                            <button
                                onClick={onGetStartedClick}
                                className="bg-teal-500 hover:bg-teal-600 text-white sm:px-6 px-2 sm:py-2 py-1 rounded text-base sm:text-lg transition"
                            >
                                {slide.buttonText}
                            </button>
                        </div>
                    </div>
                ))}
            </AwesomeSlider>
        </div>
    );
};

export default Slider;
