import React, { useContext, useState } from "react";
import { ImageCTX } from "../../context/ImageCTX";

const Pagination = () => {
    const { postperpage, response, paginate } = useContext(ImageCTX)
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(response.length / postperpage); i++) {
        pageNumbers.push(i)
    }

    const [activePage, setActivePage] = useState(1)

    const handlePageClick = (number) => {
        setActivePage(number)
    }

    return <div  >
        <div className="flex flex-row justify-end rounded-lg m-4 ">{pageNumbers.map((number) =>
            <div key={number}><button
                className="mr-2 w-14 h-14 border-2 border-gray-600 shadow-2xl  hover:border-pink-600 rounded-full text-white p-3"
                onClick={() => {
                    handlePageClick(number);
                    paginate(number);
                }}
            >{number}</button></div>
        )}</div>

    </div>;
};

export default Pagination;