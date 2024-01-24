"use client"

import React, {useEffect, useState} from "react";
import PlanSort from "@/app/(default)/planshop/_component/PlanSort";
import PlanTab from "@/app/(default)/planshop/_component/PlanTab";
import PlanBrand from "@/app/(default)/planshop/_component/PlanBrand";
import PlanGroup from "@/app/(default)/planshop/_component/PlanGroup";
import Plans from "@/app/(default)/planshop/_component/Plans";
import PlansPaging from "@/app/(default)/planshop/_component/PlansPaging";


export default function PlanList() {

    const [tab, setTab] = useState('Y');
    const [brand, setBrand] = useState("")
    const [group, setGroup] = useState("")
    const [sortOption, setSortOption] = useState("recent")


    return (
        <>
            <PlanTab tab={tab} setTab={setTab}/>
            <PlanBrand brand={brand} setBrand={setBrand}/>
            <PlanGroup group={group} setGroup={setGroup}/>
            <PlanSort sortOption={sortOption} setSortOption={setSortOption}/>
            {/*<Plans tab={tab} brand={brand} group={group} sortOption={sortOption}/>*/}
            <PlansPaging tab={tab} brand={brand} group={group} sortOption={sortOption}/>

        </>
    )
}