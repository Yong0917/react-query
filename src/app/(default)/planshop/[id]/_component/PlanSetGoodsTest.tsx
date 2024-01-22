"use client"

import {useQuery} from "@tanstack/react-query";
import BaseLoading from "@/app/(default)/_component/BaseLoading";
import {PlanDivObjModel} from "@/models/PlanDivObjModel";
import getPlanGoods from "@/app/(default)/planshop/[id]/_lib/getPlanGoods";
import {PlanGoodsParamType} from "@/models/PlanCommon";
import React, {Fragment} from "react";
import style from "@/app/(default)/planshop/page.module.css";
import PlanDivObjGoods from "@/app/(default)/planshop/[id]/_component/PlanDivObjGoods";


export default function PlanSetGoodsTest({mkdpNo, divobjNo, sort} : PlanGoodsParamType) {

    // const [ _1, _2, {id, divobjNo, sort}] = queryKey
    let param = {
        id: mkdpNo,
        divobjNo: divobjNo,
        sort: sort,
    }


    const { data: divObjInfo , isLoading, error ,isSuccess} = useQuery<PlanDivObjModel[]>({
        queryKey: ['plan', 'goods', param],
        queryFn: () => getPlanGoods(param),
        staleTime: 300 * 1000,
        gcTime: 600 * 1000,
    })


    if ( isLoading ) {
        return <BaseLoading />
    }

    // select box
    // 상품 정보

    return  (
            <>
                <div className={style.goodsWrap}>
                    {
                        divObjInfo?.map((divObj) => (
                            <Fragment key={ divObj.divobjNo }>
                                {divObj.divobjNo}
                                <PlanDivObjGoods divObjGoods={divObj.goodsList}
                                                     divObjKey={divObj.divobjNo}/>
                                {/*{PlanDivObjGoods(divObj.goodsList, divObj.divobjNo)}*/}
                            </Fragment>
                        ))
                    }
                </div>
            </>

    )

}