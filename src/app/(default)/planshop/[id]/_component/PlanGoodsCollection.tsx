"use client"

import {useState} from "react";
import PlanGoodSort from "@/app/(default)/planshop/[id]/_component/PlanGoodSort";
import PlanDivObjSelect from "@/app/(default)/planshop/[id]/_component/PlanDivObjSelect";
import PlanSetGoodsTest from "@/app/(default)/planshop/[id]/_component/PlanSetGoodsTest";
import {PlanDivObjType} from "@/models/PlanCommon";


export default function PlanGoodsCollection({planDivObjInfo, mkdpNo} : PlanDivObjType) {
    const [divobjNo, setDivobjNo] = useState('');
    const [sort, setSort] = useState("10")

    // 상품 정보
    return  (
        <>
            <div>상품 모아보기 영역</div>
            <PlanDivObjSelect divObjInfo={planDivObjInfo} setDivobjNo={setDivobjNo}/>
            <PlanGoodSort sort={sort} setSort={setSort}/>
            <PlanSetGoodsTest mkdpNo={mkdpNo} divobjNo={divobjNo} sort={sort} />
        </>

    )
}