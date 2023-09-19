import { createContext, useState } from "react";
import fetchArtworks from "../hooks/fetchArtwoks";
import { useNavigate } from "react-router-dom";


export const ImageCTX = createContext()

const ImageCTXProvider = ({ children }) => {
    const navigate = useNavigate();
    const [searchObject, setSearchObject] = useState("")
    const [currentpage, setCurrentpage] = useState(1);
    const [postperpage] = useState(9);
    const { response, isLoading, error, getData } = fetchArtworks(`/api/nl/collection?key=${import.meta.env.VITE_REACT_APP_API_KEY}&ps=100&`);


    const indexOfLastPost = currentpage * postperpage;
    const indexOfFirstPost = indexOfLastPost - postperpage;

    const currentPost = response.slice(indexOfFirstPost, indexOfLastPost)


    const paginate = (pageNumber) => setCurrentpage(pageNumber)


    return (

        <div>

            <ImageCTX.Provider
                value={{
                    response,
                    isLoading,
                    error,
                    getData,
                    navigate,
                    searchObject,
                    setSearchObject,
                    postperpage,
                    paginate,
                    currentPost,
                }}
            >
                {children}
            </ImageCTX.Provider>
        </div>
    )
}

export default ImageCTXProvider;