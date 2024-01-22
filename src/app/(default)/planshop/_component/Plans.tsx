"use client"


import {useInfiniteQuery} from "@tanstack/react-query";
import style from "./planList.module.css"
import BaseLoading from "@/app/(default)/_component/BaseLoading";
import React, {Fragment, useEffect, useMemo} from "react";
import {useInView} from "react-intersection-observer";
import Link from "next/link";
import {getPlansList} from "@/app/(default)/planshop/_lib/getPlansList";
import {Plan} from "@/models/Plan";
import {PlanSearchParamType} from "@/models/PlanCommon";

export default function Plans({tab, brand, group, sortOption} : PlanSearchParamType) {

    let param = {
        tab: tab,
        brand: brand,
        group: group,
        sortOption: sortOption
    }

    // <Plan[], Object, InfiniteData<Plan[]>, [_1 :string, _2 :string, param : PlanSearchParamType], number>
    const {
        data,
        isLoading,
        isError,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching, // 쿼리를 가져오고 있는지
    } = useInfiniteQuery({
        queryKey: ['plans', 'list', param],
        queryFn: ({pageParam = 1}) => getPlansList({pageParam : pageParam, queryKey: param}),
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {
            // return lastPage.length === 10 ? allPages.length + 1 : undefined;
            return lastPage.length > 0 ? allPages.length + 1 : undefined
        },
        // staleTime: 60 * 1000, // 캐시 유지 타임 / 기본값 0 이며 fresh -> stale / 60 * 1000 = 1분
        // staleTime: Infinity // 항상 fresh 상태 값을 가져오지 않는다
        // gcTime: 300 * 1000 // 삭제 타임 / 기본값 5분 inactve 에서 5분이 지나면 삭제 / staleTime 이 gcTime 보다 무조건 작아야 한다.
        // initialData: () => [], // 초기 데이터
        // retry: 0 // 조회 실패 시 몇번 진행 할지 카운트
        // enabled: // 실행되는 조건
    })

    const { ref, inView } = useInView({
        threshold: 0, // 하단 태그가 보이고 얼마의 픽셀이 보이고 나서 될건지 0이면 즉시,
        delay: 0, // 태그가 보이고 얼마 후에 실행할건지
    })


    useEffect(() => {
        if ( inView ) {
            !isFetching && hasNextPage && fetchNextPage()
        }
    }, [ isFetching, hasNextPage, fetchNextPage, inView ])


    // let domElement
    //
    // if( !isLoading){
    //     domElement = <SortButton option={option} setOption={setOption}/>;
    // }

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

    // useMemo(() => {} , [data]);
    // console.log(data)

    // console.log('hasNextPage : ' + hasNextPage)
    console.log('data : ' + data?.pageParams.at(-1))
    return (
        <>
            <div className={ style.container }>
                <>
                    { data?.pages[0].length && data?.pages[0].length > 0 ? (
                        data?.pages.map((page, idx) => (
                            <Fragment key={ idx }>
                                { page.map(( plan : Plan) => (
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
                                ))}
                            </Fragment>
                        ))
                    ) : <div className={ style.container }> 데이터가 존재하지 않습니다.</div> }

                    <div ref={ref} style={{ height: 5 }} />
                    {/*{hasNextPage ?*/}
                    {/*    <div style={{textAlign : 'center'}}>*/}
                    {/*        <button*/}
                    {/*            className={ style.moreButton }*/}
                    {/*            onClick={() => (fetchNextPage())}>*/}
                    {/*            더보기*/}
                    {/*        </button>*/}
                    {/*    </div>: null }*/}
                </>
            </div>
        </>
    )
}