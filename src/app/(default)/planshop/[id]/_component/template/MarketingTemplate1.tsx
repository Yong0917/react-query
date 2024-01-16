"use client"

import {PlanInfoType} from "@/models/PlanDetailModel";
import {PlanDivObjModel} from "@/models/PlanDivObjModel";
import {Plan} from "@/models/Plan";
import React, {Fragment} from "react";
import style from "@/app/(default)/planshop/page.module.css";
import PlanDivObjDiv from "@/app/(default)/planshop/[id]/_component/PlanDivObjDiv";
import PlanDivObjGoods from "@/app/(default)/planshop/[id]/_component/PlanDivObjGoods";
import PlanDivObjCoupon from "@/app/(default)/planshop/[id]/_component/PlanDivObjCoupon";
import PlanRecent from "@/app/(default)/planshop/[id]/_component/PlanRecent";
import PlanGoodsCollection from "@/app/(default)/planshop/[id]/_component/PlanGoodsCollection";


const MarketingTemplate1 = ({ planInfo } : PlanInfoType ) => {

    let planDivObjList: PlanDivObjModel[] = planInfo?.planDivObjList ?? [];
    let recentPlanList: Plan[] = planInfo?.recentPlanList ?? [];


//
//     // console.log(`구분자 테스트 ${JSON.stringify(planDivObjList)}`)
//     // console.log(`최근 기획전 테스트 ${JSON.stringify(recentPlanList)}`)
//
//     // title html (공통 가능)
       // 구분자 영역(구분자별 상품 영역) (text, html, image) planDivObjList 구분자 상품영역 쿠폰배너
       // 상품 모아보기 영역
       // footer html (공통 가능)
       // 최신 기획전 영역 (공통 가능)

    // {
    //     '10' : <h3>{ divObj.textDivobjNm }</h3>,
    //     '20' : <img src={ `https://img-stg.x2bee.com/${divObj.bnrImgPathNm}` } alt={""} width={1100}/>,
    //     '30' : <div dangerouslySetInnerHTML={{__html:planInfo?.titleHtml}}></div>
    // }[divObj.divobjGbCd]

    // select box 하나 필요하고

    return (
        <>
            <div className={style.divObjWrap}>
                {planInfo.titleHtml ? <div dangerouslySetInnerHTML={{__html:planInfo?.titleHtml }}></div> : null}
                <div>
                    { planDivObjList?.map(( divObj ) => (
                        <Fragment key={ divObj.divobjNo }>
                            <div>
                                {
                                    PlanDivObjDiv(divObj)
                                }
                            </div>
                            <div className={style.goodsWrap}>
                                {
                                    <PlanDivObjGoods divObjGoods={divObj.goodsList}
                                                     divObjKey={divObj.divobjNo}/>
                                }
                            </div>
                            <div className={style.cpnImage}>
                                {
                                    divObj.cpnDnldYn === 'Y' && !!divObj.cpnNo ? PlanDivObjCoupon(divObj) : null
                                }
                            </div>
                        </Fragment>
                    ))}
                </div>
                 {/*상품모아보기영역 추가 필요*/}
                <>
                    <PlanGoodsCollection planDivObjInfo={planDivObjList}
                                         mkdpNo={planInfo.mkdpNo}/>
                </>

                {planInfo.footerContents ? <div dangerouslySetInnerHTML={{__html:planInfo?.footerContents}}></div> : null}

                <div className={style.recentPlanWrap}>
                    {PlanRecent(recentPlanList)}
                </div>
            </div>
        </>
    )

};
export default MarketingTemplate1;