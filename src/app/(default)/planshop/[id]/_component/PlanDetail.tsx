"use client"

import {useQuery} from "@tanstack/react-query";
import BaseLoading from "@/app/(default)/_component/BaseLoading";
import {PlanDetailIdType, planDetailParams} from "@/models/PlanCommon";
import {PlanDetailModel, PlanInfoType} from "@/models/PlanDetailModel";
import {useRouter, useSearchParams} from "next/navigation";
import getPlanDetail from "@/app/(default)/planshop/[id]/_lib/getPlanDetail";
import dynamic from "next/dynamic";
import style from "@/app/_component/backButton.module.css";
import PlanModal from "@/app/(default)/planshop/[id]/_component/PlanModal";
import IconsHook from "@/hook/iconsHook";


// const components: {[key: string]: any} = {
//     MarketingTemplate1: MarketingTemplate1,
//     MarketingTemplate2: MarketingTemplate2,
//     // marketingTemplate3: Template3,
//     // marketingTemplate4: Template4
// } || MarketingTemplate1;


export default function PlanDetail({ id } :PlanDetailIdType) {
    const searchParams = useSearchParams();
    const router = useRouter()

    IconsHook();
    const handleClickBtn = () => {
        router.push('/planshop')
    }

    const paramKey = (searchParams.get('previewDate') || searchParams.get('dataLangCd'))
        ? (planDetailParams.setParams(searchParams), planDetailParams)
        : id;


    const { data: planInfo  , isLoading, error ,isSuccess} = useQuery<PlanDetailModel>({
        queryKey: ['plan', 'detail'],
        queryFn: () => getPlanDetail(id)
    })


    // 여기서 등급 체크를 하고
    // compoent 템플릿별로 나누고
    // alert 다 하고
    //

    if ( isLoading ) {
        return <BaseLoading />
    }

    if (planInfo?.resultCd === '7010' || planInfo?.resultCd === '7020'){

        return <PlanModal message={planInfo?.resultMsg}/>
        // alert(planInfo.resultMsg)
        // return router.replace('/planshop')
        // modal return
    }

    // const TemplateComponent = components[planInfo?.tmplFileNm || 'MarketingTemplate1'] || MarketingTemplate1;

    // const MarketingTemplate1: React.FC<PlanProps> = ({ planInfo }) => {
    if( isSuccess ) {
        const Template = dynamic<PlanInfoType>(
            () => import(`@/app/(default)/planshop/[id]/_component/template/${ planInfo?.tmplFileNm || 'MarketingTemplate1'}`), {
            loading: () => <p>Loading</p>
        })

        return (

            <>
                {/*기획전 상세 header 영역*/}
                <Template planInfo={planInfo}/>
                {/*최신 기획전 영역 (못넣을수도)*/}
                <button className={style.planButton} onClick={ handleClickBtn }>
                    목록
                </button>
            </>
        )
    }

    // return (
    //     // header 영역
    //     <TemplateComponent planInfo={planInfo}/>
    //     // 뒤로가기 목록 버튼
    // )
}