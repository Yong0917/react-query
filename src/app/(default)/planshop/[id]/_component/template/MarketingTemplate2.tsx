import {PlanDetailType} from "@/models/PlanCommon";
import {PlanDivObjModel} from "@/models/PlanDivObjModel";
import {Plan} from "@/models/Plan";
import React from "react";
import {PlanDetailModel} from "@/models/PlanDetailModel";

type PlanProps = {
    planInfo: PlanDetailModel
}

const MarketingTemplate2: React.FC<PlanProps> = ({ planInfo }) => {
    let planDivObjList: PlanDivObjModel[] = planInfo?.planDivObjList ?? [];
    let recentPlanList: Plan[] = planInfo?.recentPlanList ?? [];
//
//     // console.log(`구분자 테스트 ${JSON.stringify(planDivObjList)}`)
//     // console.log(`최근 기획전 테스트 ${JSON.stringify(recentPlanList)}`)
//
//     // title html (공통 가능) // 구분자 영역(구분자별 상품 영역) (text, html, image) planDivObjList 구분자 상품영역 쿠폰배너 // 상품 모아보기 영역  // footer html (공통 가능) // 최신 기획전 영역 (공통 가능)

    return <div> {planInfo.titleHtml}</div>
};

export default MarketingTemplate2;

