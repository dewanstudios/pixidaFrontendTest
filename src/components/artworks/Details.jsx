import React, { useContext, useEffect, useState } from "react";
import { ImageCTX } from "../../context/ImageCTX";
import { useParams } from "react-router-dom";
import axios from "axios";

function Details() {
    const { navigate, setIsLoading } = useContext(ImageCTX)
    const backHomePage = () => {
        navigate("*")
    }

    const [arts, setArts] = useState({})
    const params = useParams();

    useEffect(() => {
        const getArts = async () => {

            try {

                const result = await axios(`/api/nl/collection/${params.id}?key=${import.meta.env.VITE_REACT_APP_API_KEY}`)
                setArts(result.data.artObject)

            } catch (error) {
                console.log(error);
            }

        }
        getArts()
    }, [])
    //  i defined this string becos of the back arrow 
    const back = "< Back to the List"

    const imageDatils = arts.webImage?.url;

    const height = arts.webImage?.height;

    const width = arts.webImage?.width;




    return <div className="h-auto">
        <button className="text-pink-600 pl-10" onClick={backHomePage}>{back} </button>
        <div className="">
            <img loading="lazy" className=" static object-none h-screen  w-screen items-center p-10 rounded-lg" key={arts.id} src={imageDatils} alt={arts.longTitle} />
            <h2 className="absolute text-white inset-x-10 bottom-0 p-3 text-8xl ">{arts.longTitle}</h2>
        </div>
        <div className="border-b-4 border-gray-500  ">
            <h5 className="text-gray-500 pl-6">Title</h5>
            <h className="text-white text-2xl pl-6">{arts.longTitle}</h>
        </div>
        <div className="border-b-4 border-gray-500  ">
            <h5 className="text-gray-500 pl-6">Artist</h5>
            <h3 className="text-white text-2xl pl-6">{arts.principalMaker}</h3>
        </div>
        <div className="border-b-4 border-gray-500  ">
            <h5 className="text-gray-500 pl-6">Object Type</h5>
            <h3 className="text-white text-2xl pl-6">{arts.objectTypes
            }</h3>
        </div>
        <div className="border-b-4 border-gray-500  ">
            <h5 className="text-gray-500 pl-6">Measurements</h5>
            <h3 className="text-white text-2xl pl-6">{`height ${height} x ${width}`}</h3>
        </div>
        <div className="border-b-4 border-gray-500  mb-10">
            <h5 className="text-gray-500 pl-6">Discription</h5>
            <h3 className="text-white text-2xl pl-6">{arts.label?.description
            }</h3>
        </div>



    </div>;
}

export default Details;
