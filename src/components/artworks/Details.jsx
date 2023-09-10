import React, { useContext } from "react";
import { ImageCTX } from "../../context/ImageCTX";

function Details() {
    const { navigate } = useContext(ImageCTX)
    const backHomePage = () => {
        navigate("*")
    }
    return <div>
        <button onClick={backHomePage}>Back to the List</button>
        <img src="" alt="" />
        <div>
            <h5>Title</h5>
            <h3>jdsnlmmömvölsöm</h3>
        </div>
        <div>
            <h5>Artist</h5>
            <h3>jdsnlmmömvölsöm</h3>
        </div>
        <div>
            <h5>Object Type</h5>
            <h3>jdsnlmmömvölsöm</h3>
        </div>
        <div>
            <h5>Measurements</h5>
            <h3>jdsnlmmömvölsöm</h3>
        </div>   <div>
            <h5>Discription</h5>
            <h3>jdsnlmmömvölsöm</h3>
        </div>



    </div>;
}

export default Details;
