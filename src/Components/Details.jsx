import { useParams } from "react-router";
import { AiTwotoneLike } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthContext";
import { motion } from "framer-motion";

export const Details = () => {
    const params = useParams();
    const [like, setLike] = useState(false);
    const [detailsData, setDetailsDta] = useState({});
    const { user, loading, mode } = useContext(AuthContext);

    const {
        photo,
        title,
        des,
        location,
        rent,
        roomtype,
        life,
        Availability,
        _id,
        number,
        email,
        username,
    } = detailsData;

    useEffect(() => {
        document.getElementById("titles").innerText = "Details Page";
    }, []);

    useEffect(() => {
        fetch(`https://roomate-server-side.vercel.app/allMatess/${params?.id}`)
            .then((res) => res.json())
            .then((data) => setDetailsDta(data))
            .catch((error) => console.log(error));
    }, [like]);

    const handleUpdateLike = (id) => {
        const updateData = detailsData;
        fetch(`https://roomate-server-side.vercel.app/roommate/${id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(updateData),
        })
            .then((res) => {
                if (res.ok) setLike(!like);
            })
            .catch((error) => console.log(error));
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            className={`px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-12 lg:px-8 lg:py-20 ${mode ? "bg-black text-white" : "bg-white text-black"
                }`}
        >
            <div className="grid gap-10 lg:grid-cols-2 items-center">
                {/* Text Section */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex flex-col justify-center"
                >
                    <div className="mb-6">
                        <h2
                            className={`text-4xl font-bold mb-4 ${mode ? "text-teal-400" : "text-teal-600"
                                }`}
                        >
                            🏠 {title}
                        </h2>
                        <p className={`text-lg ${mode ? "text-gray-300" : "text-gray-700"}`}>
                            {des}
                        </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        <div
                            className={`border-l-4 rounded-lg p-4 shadow-md ${mode
                                ? "bg-zinc-900 border-teal-500 text-white"
                                : "bg-gray-100 border-teal-600 text-black"
                                }`}
                        >
                            <h6 className="font-semibold text-lg mb-1">📍 Location: {location}</h6>
                            <p>🛏️ Room Type: {roomtype}</p>
                            <p>💰 Rent: {rent}</p>
                        </div>

                        <div
                            className={`border-l-4 rounded-lg p-4 shadow-md ${mode
                                ? "bg-zinc-900 border-green-500 text-white"
                                : "bg-gray-100 border-green-600 text-black"
                                }`}
                        >
                            <h6 className="font-semibold text-lg mb-1">👤 Posted By: {username}</h6>
                            <p>Life Style: {life}</p>
                            <p
                                className={`mt-1 rounded px-2 py-1 inline-block text-white ${Availability === "Available"
                                    ? "bg-green-500"
                                    : "bg-red-500"
                                    }`}
                            >
                                Availability: {Availability}
                            </p>
                        </div>
                    </div>

                    {/* Like section */}
                    <div className="mt-6 flex items-center gap-4">
                        {loading ? (
                            <span>Loading...</span>
                        ) : (
                            user?.email !== email && (
                                <AiTwotoneLike
                                    size={38}
                                    className={`cursor-pointer transition duration-300 ${mode ? "text-teal-300 hover:text-teal-500" : "text-teal-600 hover:text-teal-800"
                                        }`}
                                    onClick={() => handleUpdateLike(_id)}
                                />
                            )
                        )}
                        <h1 className="text-lg font-medium">
                            People Interested:{" "}
                            <span className={`${mode ? "text-green-400" : "text-teal-700"}`}>
                                {detailsData?.like}
                            </span>
                        </h1>
                    </div>

                    {/* Contact after like */}
                    <div className="mt-3 text-lg font-semibold text-green-500">
                        📞 Contact Number: {number}
                    </div>

                </motion.div>

                {/* Image Section */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <img
                        src={photo}
                        alt="Roommate"
                        className="rounded-2xl w-full h-64 object-cover shadow-xl"
                    />
                </motion.div>
            </div>
        </motion.div>
    );
};
