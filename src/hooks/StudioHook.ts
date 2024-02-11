import { Studio } from "../types/studio";
import { useQuery } from "react-query";
import axios, { AxiosError } from "axios";

const useFetchStudios = () => {
    return useQuery<Studio[], AxiosError>("studios", () => 
        //Replace call to json file with an api call below in get method.
        axios.get('./studios.json')
            .then((response) => response.data)
    );
}

export default useFetchStudios;