import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Components/Home";
import Error from "../Error/Error";
import Login from "../Components/Login";
import SingUp from "../Components/SingUp";
import PrivetRouter from "../Privet/PrivetRouter";
import AddToRoomMate from "../Components/AddToRoomMate";
import Mylisting from "../Components/Mylisting";
import BrowseListing from "../Components/BrowseListing";

import UpdateRoomMatePost from "../Components/UpdateRoomMatePost";
import ForgetPassword from "../Components/ForgetPassword";
import DeshBoard from "../Components/DeshBoard/DeshBoard";
import DeshStatics from "../Components/DeshBoard/DeshStatics";
import { Details } from "../Components/Details";
import Myprofile from "../Components/Myprofile/Myprofile";





export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                path: "/",
                hydrateFallbackElement: <div className="flex mt-20 justify-center items-center">
                    <span className="loading loading-spinner text-success"></span>
                </div>,
                loader: () => fetch('https://roomate-server-side.vercel.app/allMates'),
                Component: Home

            }, {
                path: '/details/:id',
                hydrateFallbackElement: <div className="flex mt-20 justify-center items-center">
                    <span className="loading loading-spinner text-success"></span>
                </div>,
                element: <PrivetRouter>
                    <Details></Details>
                </PrivetRouter>
            },
            {
                path: "/login",
                hydrateFallbackElement: <div className="flex mt-20 justify-center items-center">
                    <span className="loading loading-spinner text-success"></span>
                </div>,
                Component: Login
            },
            {
                path: "/signup",
                hydrateFallbackElement: <div className="flex mt-20 justify-center items-center">
                    <span className="loading loading-spinner text-success"></span>
                </div>,
                Component: SingUp
            },
            {
                path: "/browseListing",
                hydrateFallbackElement: <div className="flex mt-20 justify-center items-center">
                    <span className="loading loading-spinner text-success"></span>
                </div>,
                loader: () => fetch('https://roomate-server-side.vercel.app/allMatesall'),
                element: <BrowseListing></BrowseListing>


            }, {
                path: "/passwordForget",
                Component: ForgetPassword
            }

        ]
    },
    {
        path: "/*",
        Component: Error

    }
    , {
        path: "/deshboard",
        Component: DeshBoard,
        children: [
            {
                path: '/deshboard',
                element: <DeshStatics></DeshStatics>
            }
            ,
            {
                path: "/deshboard/addtoroommate",
                hydrateFallbackElement: <div className="flex mt-20 justify-center items-center">
                    <span className="loading loading-spinner text-success"></span>
                </div>,
                element: <PrivetRouter>
                    <AddToRoomMate></AddToRoomMate>
                </PrivetRouter>

            },
            {
                path: "/deshboard/mylisting",
                hydrateFallbackElement: <div className="flex mt-20 justify-center items-center">
                    <span className="loading loading-spinner text-teal-600"></span>
                </div>,
                element: <PrivetRouter>
                    <Mylisting></Mylisting>
                </PrivetRouter>

            },
            {

                path: "/deshboard/updateroomMate/:id",
                loader: (({ params }) => fetch(`https://roomate-server-side.vercel.app/allMatess/${params?.id}`)),
                hydrateFallbackElement: <div className="flex mt-20 justify-center items-center">
                    <span className="loading loading-spinner text-success"></span>
                </div>,
                element: <PrivetRouter>
                    <UpdateRoomMatePost></UpdateRoomMatePost>
                </PrivetRouter>

            },
            {
                path: '/deshboard/myprofile',
                hydrateFallbackElement: <div className="flex mt-20 justify-center items-center">
                    <span className="loading loading-spinner text-teal-600"></span>
                </div>,
                element: <PrivetRouter>
                    <Myprofile></Myprofile>
                </PrivetRouter>

            }, {
                path: '/deshboard/passwordForget',
                Component: ForgetPassword
            },
            {
                path: '/deshboard/details/:id',
                hydrateFallbackElement: <div className="flex mt-20 justify-center items-center">
                    <span className="loading loading-spinner text-success"></span>
                </div>,
                element: <PrivetRouter>
                    <Details></Details>
                </PrivetRouter>
            },
        ]
    }
])