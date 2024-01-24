"use client"


import {keepPreviousData, useQuery, useQueryClient} from "@tanstack/react-query";
import style from "./planList.module.css"
import BaseLoading from "@/app/(default)/_component/BaseLoading";
import React, {useEffect, useState} from "react";
import Link from "next/link";
import {Plan, PlanPagingModel} from "@/models/Plan";
import {PlanSearchParamType} from "@/models/PlanCommon";
import {getPlanListPaging} from "@/app/(default)/planshop/_lib/getPlansListPaging";
import PaginationCustom from "@/app/(default)/planshop/_component/Pagination";
import PagingLibrary from "@/app/(default)/planshop/_component/Paging";

export default function PlansPaging({tab, brand, group, sortOption} : PlanSearchParamType) {

    const [page, setPage] = useState(1); // 현재페이지를 0으로 초기설정
    const [planInfo, setPlanInfo] = useState<Plan[]>([]);

    const queryClient = useQueryClient();

    let planParam = {
        tab: tab,
        brand: brand,
        group: group,
        sortOption: sortOption,
        pageParam : page
    }

    // const {data, isSuccess, isPlaceholderData,isFetched,isLoading} = useQuery<PlanPagingModel>({
    //         queryKey: ["plans", "list"],
    //         queryFn: () => getPlanListPaging(planParam),
    //         placeholderData: keepPreviousData
    // })


    const {data,isLoading ,isSuccess, isFetched,isPlaceholderData} = useQuery<PlanPagingModel>({
        queryKey: ["plans", "list", planParam],
        queryFn: () => getPlanListPaging(planParam),
        placeholderData: keepPreviousData // 기존 데이터 유지하면서 가져옴.
    })


    console.log(JSON.stringify(data))
    // console.log(JSON.stringify(data?.planInfoList))
    // setPlanInfo()

    useEffect(() => {       // page 초기화
        setPage(1);
    }, [planParam.tab, planParam.brand, planParam.group, planParam.sortOption])

    // setCompletePriceData((prevCompletePriceData) => {
    //     return [...prevCompletePriceData, prItmBaseInfo[index]];
    // });
    useEffect(() => {
        setPlanInfo((planInfo: any) => {
            return [...planInfo, data];
        })
    }, [data])

    // console.log(JSON.stringify(planInfo))


    // useEffect(() => {
    //     queryClient.prefetchQuery({
    //         queryKey: ["plans", "list"],
    //         queryFn: () => getPlanListPaging(planParam)
    //     })
    // }, [data, planParam])

    // useEffect(() => {
    //     if (!isPlaceholderData && data?.totalCount) {
    //         console.log(planParam)
    //         queryClient.prefetchQuery({
    //             queryKey: ["plans", "list"],
    //             queryFn: () => getPlanListPaging(planParam)
    //         })
    //     }
    // }, [data, planParam, isPlaceholderData])

    // useEffect(() =>
    // {
    //     if(data?.totalCount && data?.totalCount > 0) {
    //         setTest(data?.totalCount)
    return (
        <>
            <div className={ style.container }>
                <>
                    {/*<button className={ style.backButton }*/}
                    { !isFetched ? <BaseLoading/> :
                        data?.totalCount && data?.totalCount > 0 ? (
                            data?.planInfoList?.map(( plan : Plan) => (
                                <Link href={`/planshop/${plan.mkdpNo}`} key={ plan.mkdpNo } className={ style.movieWrap } >
                                    <div className={ style.movieNum }>
                                        <h4>{ plan.mkdpNo }</h4>
                                    </div>
                                    <div className={ style.movieImg }>
                                        { plan.imageList[0].contGbCd === '10' ?
                                            <img src={ `https://img-stg.x2bee.com/${plan.imageList[0].bnrImgPathNm}` } alt={""} /> :
                                            <video src={ `https://img-stg.x2bee.com/${plan.imageList[0].bnrImgPathNm}`}
                                                   autoPlay={true}></video>
                                        }
                                    </div>
                                    <div className={ style.movieContent }>
                                        <p>기획전 제목 : { plan.mkdpNm }</p>
                                        <p>시작일 : { plan.startDate }</p>
                                    </div>
                                </Link>
                            ))
                        ) : <div className={ style.container }> 데이터가 존재하지 않습니다.</div>
                    }
                </>
            </div>
            {/*<div>*/}
            {/*    <PaginationCustom totalPage={data?.totalCount ?? 0} limit={5} page={page} setPage={setPage}/>*/}
            {/*    <PagingLibrary totalPage={data?.totalCount ?? 0} limit={5} page={page} setPage={setPage}/>*/}
            {/*</div>*/}
            {(data?.planInfoList.length && data?.planInfoList.length > 0) && (data?.totalCount > data?.planInfoList.length) ?
                <div style={{textAlign : 'center'}}>
                    <button
                        className={ style.moreButton }
                        onClick={() => (setPage(page + 1))}>
                        더보기
                    </button>
                </div>: null }
        </>
    )
    //     }

    // }, [isSuccess]);
}