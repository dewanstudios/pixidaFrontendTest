import React from "react";
import Search from "../searchcomponents/Search";

export const Searchbarholder = () => {


    return <div className="bg-neutral-800 shadow-2xl p-8 m-8 rounded-full border-2 border-fuchsia-600" >
        <div className="flex justify-between items-center ">
            <h1 className="text-white  text-center text-2xl font-bold mb-4 max-md:hidden">Art API</h1>
            <Search />

        </div>
    </div>;
};
