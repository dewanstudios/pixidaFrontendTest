import React, { useContext } from "react";
import Pagination from "./Pagination"
import { ImageCTX } from "../../context/ImageCTX";
import Art from "./Art";
import { LoadingBlocks } from "./LoadingBlocks";

const Artworks = () => {
    const { response, isLoading, searchObject, currentPost } = useContext(ImageCTX);

    return <div className="items-center">
        {searchObject ? <h1 className="text-7xl m-8 text-white">{`Found ${response.length} result for : ${searchObject}`}</h1> :
            <h1 className="text-7xl m-8 text-white">All artwork</h1>}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 
                       xl:grid-cols-4 gap-4 max-w-7xl mx-auto px-4">
            {isLoading ? <LoadingBlocks item={9} /> :
                currentPost && currentPost.map((data, key) => <Art data={data} key={key} />)}
        </div>
        <Pagination />
    </div>;
};

export default Artworks;
