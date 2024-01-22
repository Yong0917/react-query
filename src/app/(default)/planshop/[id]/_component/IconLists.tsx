import React from "react";
import {IconList} from "@/models/PlanGoods";
import UseIconStore from "@/store/iconStore";

export default function IconLists({ iconList } : IconList){

    // IconsHook();
    const {icons} = UseIconStore();


    // const { data, isLoading, isFetched } = useQuery<Record<number, string> | any>({
    //     queryKey: ['icon','gets'],
    //     queryFn: getIcons,
    //     staleTime: 60 * 100, // fresh -> stale, 5분이라는 기준
    //     // gcTime: 300 * 1000,
    //
    //     // enabled: !!data?.mkdpNo
    // })
    //
    // // console.log(divObjKey)
    // if( isLoading ){
    //     return <BaseLoading/>
    // }
    return (
        <>
            <div>
                {iconList?.map((iconNo : string) =>
                    <img key={`${iconNo}`} src={`https://img-stg.x2bee.com/${icons[iconNo]}`} alt={""} width={50}/>
                )}
            </div>
        </>
    )


}