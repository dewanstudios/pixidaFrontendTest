import React, { useContext } from "react";
import { Link } from "react-router-dom";



function Art({ data }) {


    return <div>
        <Link className="relative" to={`/details/${data.objectNumber}`}>
            <img loading="lazy" className="h-80 w-full object-cover rounded-lg shadow-2xl "
                src={data.webImage?.url} key={data.id} alt={data.title} />
            <h5 className="absolute text-cyan-400 text-xl bg-slate-950 opacity-30 p-1 rounded-bl-lg rounded-tr-lg  top-0 right-0 z-10">
                {data.principalOrFirstMaker}</h5>
            <h2 className="absolute text-white inset-x-0 text-2xl p-2 drop-shadow-2xl bottom-0">{data.title}</h2>
        </Link>

    </div>;
}

export default Art;
