import UseIconStore from "@/store/iconStore";
import {useEffect} from "react";

const IconsHook = () => {

    const iconStore = UseIconStore()

    useEffect( () => {
        iconStore.fetchIcons()
    }, [])



};

export default IconsHook;