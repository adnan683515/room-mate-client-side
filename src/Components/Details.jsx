import { useParams } from "react-router";
import { AiTwotoneLike } from "react-icons/ai";
import { FaMapMarkerAlt, FaUser, FaMoneyBillAlt, FaBed, FaPhoneAlt } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthContext";
import { motion } from "framer-motion";

export const Details = () => {
    const params = useParams();
    const [like, setLike] = useState(false);
    const [detailsData, setDetailsDta] = useState({});
    const [load, setLoad] = useState(true)
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
            .then((data) => {
                setLoad(false)
                setDetailsDta(data)
            })
            .catch((error) => {
                setLoad(false)
                console.log(error)
            });
    }, [like]);

    const handleUpdateLike = (id) => {
        fetch(`https://roomate-server-side.vercel.app/roommate/${id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(detailsData),
        })
            .then((res) => {
                if (res.ok) setLike(!like);
            })
            .catch((error) => console.log(error));
    };

    return (
        <div className={`-mb-28 ${mode ? "bg-black text-white" : "bg-white text-black"} min-h-screen px-4 py-16`}>
            {load ? (
                <div className="flex justify-center items-center h-[60vh]">
                    <div className="text-xl font-semibold animate-pulse text-teal-500">Loading...</div>
                </div>
            ) : (
                <motion.div
                    initial={{ opacity: 0, y: 70 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, type: "spring" }}
                    className="mx-auto max-w-7xl md:px-12 lg:px-8 lg:py-20"
                >
                    <div className="grid gap-10 lg:grid-cols-2 items-center">
                        {/* Left: Text Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h2 className={`text-4xl font-bold ${mode ? "text-teal-400" : "text-teal-600"}`}>
                                🏠 {title}
                            </h2>
                            <p className={`text-lg ${mode ? "text-gray-300" : "text-gray-700"}`}>{des}</p>

                            <div className="space-y-3 text-base">
                                <p className="flex items-center gap-2">
                                    <FaMapMarkerAlt className="text-teal-500" /> <strong>Location:</strong> {location}
                                </p>
                                <p className="flex items-center gap-2">
                                    <FaBed className="text-purple-500" /> <strong>Room Type:</strong> {roomtype}
                                </p>
                                <p className="flex items-center gap-2">
                                    <FaMoneyBillAlt className="text-green-600" /> <strong>Rent:</strong> ${rent}
                                </p>
                                <p className="flex items-center gap-2">
                                    <FaUser className="text-yellow-500" /> <strong>Posted By:</strong> {username}
                                </p>
                                <p><strong>Life Style:</strong> {life}</p>
                                <p>
                                    <span className={`inline-block px-3 py-1 rounded-full text-white ${Availability === "Available" ? "bg-green-500" : "bg-red-500"}`}>
                                        {Availability}
                                    </span>
                                </p>
                            </div>

                            {/* Like & Contact */}
                            <div className="flex items-center gap-5 mt-6 flex-wrap">
                                {!loading && user?.email !== email && (
                                    <AiTwotoneLike
                                        size={38}
                                        className={`cursor-pointer transition ${mode ? "text-teal-300 hover:text-teal-500" : "text-teal-600 hover:text-teal-800"}`}
                                        onClick={() => handleUpdateLike(_id)}
                                        title="Click to Like"
                                    />
                                )}
                                <p className="text-lg font-medium">
                                    People Interested:{" "}
                                    <span className={`${mode ? "text-green-400" : "text-teal-700"}`}>
                                        {detailsData?.like}
                                    </span>
                                </p>
                                <p className="flex items-center gap-2 text-green-500 font-semibold">
                                    <FaPhoneAlt /> {number}
                                </p>
                            </div>
                        </motion.div>

                        {/* Right: Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src={photo}
                                alt="Roommate"
                                className="rounded-2xl w-full h-96 object-cover shadow-xl"
                            />
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </div>
    );

};
