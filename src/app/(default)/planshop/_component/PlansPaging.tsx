"use client"


import {useQuery} from "@tanstack/react-query";
import style from "./movieList.module.css"
import BaseLoading from "@/app/(default)/_component/BaseLoading";
import React, {useMemo, useState} from "react";
import Link from "next/link";
import {Plan} from "@/models/Plan";
import {PlanSearchParamType} from "@/models/PlanCommon";
import {getPlanListPaging} from "@/app/(default)/planshop/_lib/getPlansListPaging";


export default function PlansPaging({tab, brand, group, sortOption} : PlanSearchParamType) {

    const [currentPage, setCurrentPage] = useState(1); // 현재페이지를 0으로 초기설정

    let planParam = {
        tab: tab,
        brand: brand,
        group: group,
        sortOption: sortOption,
        pageParam : currentPage
    }

    const { data, isLoading, isError } = useQuery<Plan[]>({
        queryKey : ["plans","list", planParam],
        queryFn: () => getPlanListPaging(planParam),
        staleTime: 300 * 1000
    })


    if ( isLoading ) {
        return <BaseLoading />
    }


    /*
        ReactDevTools
        Refetch => 데이터를 다시 불러옴 ( 무조건 )
        Invalidate => 데이터를 폐기 후 다시 불러옴 ( Observers 있을 때 가져오고 아닌 경우는 Observers 생길 때 가져온다 ( 데이터를 쓰고 있을 떄 가져온다 ) )
        Reset => 초기 데이터가 있을 경우 초기 데이터를 가져오고 초기 데이터가 없는 경우 Api 호출하여 새로 가져온다 ( 초기 데이터 == initialData )

        Trigger Loading => 로딩 상태 확인 / Restore Loading => 원복
        Trigger Error => 에러 상태 확인 / Restore Error => 원복
    */


    return (
        <>
            <div className={ style.container }>
                <>
                    { data?.length && data?.length > 0 ? (
                        data?.map(( plan : Plan) => (
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

                    ) : <div className={ style.container }> 데이터가 존재하지 않습니다.</div> }
                    <button className={ style.backButton }
                            onClick={() => setCurrentPage((prev) => prev + 1)}>
                        더보기
                    </button>
                </>
            </div>
        </>
    )
}