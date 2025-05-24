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
import { Details } from "../Components/Details";
import UpdateRoomMatePost from "../Components/UpdateRoomMatePost";
import ForgetPassword from "../Components/ForgetPassword";




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
                path: "/singup",
                hydrateFallbackElement: <div className="flex mt-20 justify-center items-center">
                    <span className="loading loading-spinner text-success"></span>
                </div>,
                Component: SingUp
            },
            {
                path: "/addtoroommate",
                hydrateFallbackElement: <div className="flex mt-20 justify-center items-center">
                    <span className="loading loading-spinner text-success"></span>
                </div>,
                element: <PrivetRouter>
                    <AddToRoomMate></AddToRoomMate>
                </PrivetRouter>

            },
            {
                path: "/mylisting/:email",
                loader: ({ params }) => fetch(`https://roomate-server-side.vercel.app/mylisting/${params?.email}`),
                hydrateFallbackElement: <div className="flex mt-20 justify-center items-center">
                    <span className="loading loading-spinner text-success"></span>
                </div>,
                element: <PrivetRouter>
                    <Mylisting></Mylisting>
                </PrivetRouter>

            },
            {
                path: "/browseListing",
                hydrateFallbackElement: <div className="flex mt-20 justify-center items-center">
                    <span className="loading loading-spinner text-success"></span>
                </div>,
                loader: () => fetch('https://roomate-server-side.vercel.app/allMatesall'),
                element: <BrowseListing></BrowseListing>


            }, {
            
                path: "/updateroomMate/:id",
                loader: (({ params }) => fetch(`https://roomate-server-side.vercel.app/allMatess/${params?.id}`)),
                hydrateFallbackElement: <div className="flex mt-20 justify-center items-center">
                    <span className="loading loading-spinner text-success"></span>
                </div>,
                element: <PrivetRouter>
                    <UpdateRoomMatePost></UpdateRoomMatePost>
                </PrivetRouter>

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
])