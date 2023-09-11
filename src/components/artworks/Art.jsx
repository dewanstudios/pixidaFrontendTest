import React, { useContext } from "react";
import { ImageCTX } from "../../context/ImageCTX";



function Art({ data }) {
    const { navigate } = useContext(ImageCTX)

    console.log(data);

    // const artDetails = () => {
    //     navigate('/details')
    // }
    return <div>
        <a className="relative" href={data.webImage.url}>
            <img className="h-80 w-80 object-cover rounded-lg shadow-2xl "
                src={data.webImage.url} key={data.id} alt={data.title} />
            <h5 className="absolute text-cyan-400 text-xl bg-slate-950 opacity-30 p-1 rounded-bl-lg rounded-tr-lg  top-0 right-0 z-10">
                {data.principalOrFirstMaker}</h5>
            <h2 className="absolute text-white inset-x-0 text-2xl p-2 drop-shadow-2xl bottom-0">{data.title}</h2>
        </a>

    </div>;
}

export default Art;
