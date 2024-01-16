import React from "react";
import {useQuery} from "@tanstack/react-query";
import {getBrandsList} from "@/app/(default)/planshop/_lib/getBrandsList";
import BaseLoading from "@/app/(default)/_component/BaseLoading";
import {PlanBrandType} from "@/models/PlanCommon";
import {PlanBrandModel} from "@/models/PlanBrandModel";

export default function PlanBrand({brand, setBrand} : PlanBrandType) {

    const { data, isLoading,error } = useQuery<PlanBrandModel[]>({
        queryKey: ['plans', 'brands'],
        queryFn: getBrandsList
    })

    if ( isLoading ) {
        return <BaseLoading />
    }

    return (
        <select onChange={(e : any) => setBrand(e.target.value)} value={brand}>
            <option value="">브랜드 전체</option>
            {data?.map((brand) => (
                <option key={brand.brandNo} value={brand.brandNo}>
                    {brand.brandNm}
                </option>
            ))}
        </select>

    );
}