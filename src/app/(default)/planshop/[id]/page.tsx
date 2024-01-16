import {dehydrate, HydrationBoundary, QueryClient} from "@tanstack/react-query";
import BackButton from "@/app/_component/BackButton";
import React from "react";
import {PlanDetailPageType, PlanGoodsParam} from "@/models/PlanCommon";
import getPlanDetail from "@/app/(default)/planshop/[id]/_lib/getPlanDetail";
import PlanDetail from "@/app/(default)/planshop/[id]/_component/PlanDetail";
import getPlanGoods from "@/app/(default)/planshop/[id]/_lib/getPlanGoods";
import {getIcons} from "@/app/(default)/planshop/[id]/_lib/getIcons";


export default async function PlanDetailPage({ params } :PlanDetailPageType ) {

    const { id } = params
    // PlanDetailParam.id = id

    // planDetailParams.setParamsId(params.id)
    // let PlanDetailParam = {
    //     id: params.id,
    //     previewDate: '',
    //     dataLangCd: ''
    // }

    PlanGoodsParam.id = id

    const queryClient = new QueryClient()
    await queryClient.prefetchQuery({
        queryKey: ['plan', 'detail', id],
        queryFn: () => getPlanDetail(id),
    })

    await queryClient.prefetchQuery({
        queryKey: ['plan', 'goods', PlanGoodsParam],
        queryFn: () => getPlanGoods(PlanGoodsParam),
    })

    await queryClient.prefetchQuery({
        queryKey: ['icon', 'gets'],
        queryFn :getIcons,
    })

    const dehydrateState = dehydrate( queryClient )


    return (
        // 글로벌 css
        <div>
            <HydrationBoundary state={ dehydrateState }>
                <BackButton />
                <PlanDetail id={id} />
            </HydrationBoundary>
        </div>
    )
}