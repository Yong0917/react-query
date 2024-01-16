import React from "react";
import {useQuery} from "@tanstack/react-query";
import {getIcons} from "@/app/(default)/planshop/[id]/_lib/getIcons";
import BaseLoading from "@/app/(default)/_component/BaseLoading";
import {IconList, PlanGoods} from "@/models/PlanGoods";

export default function IconLists({ iconList } : IconList){

    const { data, isLoading, isFetched } = useQuery<Record<number, string> | any>({
        queryKey: ['icon','gets'],
        queryFn: getIcons,
        staleTime: 60 * 100, // fresh -> stale, 5분이라는 기준
        // gcTime: 300 * 1000,

        // enabled: !!data?.mkdpNo
    })
    // console.log(divObjKey)
    if( isLoading ){
        return <BaseLoading/>
    }

    return (
        <>
            <div>
                {iconList?.map((iconNo) =>
                    <img key={`${iconNo}`} src={`https://img-stg.x2bee.com/${data[iconNo]}`} alt={""} width={50}/>
                )}
            </div>
        </>
    )


}