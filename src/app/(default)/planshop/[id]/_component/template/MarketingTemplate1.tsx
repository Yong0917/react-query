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
import {useRouter} from "next/navigation";


const MarketingTemplate1 = ({ planInfo } : PlanInfoType ) => {

    let planDivObjList: PlanDivObjModel[] = planInfo?.planDivObjList ?? [];
    let recentPlanList: Plan[] = planInfo?.recentPlanList ?? [];

    const router = useRouter()
    const handleClickBtn = () => {
        router.push('/planshop')
    }

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
                {/*상단HTML영역*/}
                {planInfo.titleHtml ? <div dangerouslySetInnerHTML={{__html:planInfo?.titleHtml }}></div> : null}
                <div>
                    {/*구분자영역*/}
                    { planDivObjList?.map(( divObj ) => (
                        <Fragment key={ divObj.divobjNo }>
                            <div>
                                <div>구분자(이미지,HTML,TEXT)영역</div>
                                {
                                    /*구분자(이미지,HTML,TEXT)*/
                                    <PlanDivObjDiv divObj={divObj}/>
                                }
                            </div>
                            <div className={style.goodsWrap}>
                                {
                                    /*구분자상품*/
                                    <PlanDivObjGoods divObjGoods={divObj.goodsList}
                                                     divObjKey={divObj.divobjNo}/>
                                }
                            </div>
                            <div className={style.cpnImage}>
                                <div style={{marginTop:'30px'}}>!!!!!!!!!!!!!!! 쿠폰영역입니다!!!!!!!!!!!!!!</div>
                                {
                                    /*구분자쿠폰*/
                                    divObj.cpnDnldYn === 'Y' && !!divObj.cpnNo ? PlanDivObjCoupon(divObj) : null
                                }
                            </div>
                        </Fragment>
                    ))}
                </div>
                 {/*상품모아보기영역*/}
                <>
                    <PlanGoodsCollection planDivObjInfo={planDivObjList}
                                         mkdpNo={planInfo.mkdpNo}/>
                </>

                {/*하단HTML영역*/}
                {planInfo.footerContents ? <div dangerouslySetInnerHTML={{__html:planInfo?.footerContents}}></div> : null}

                <div className={style.recentPlanWrap}>
                    {/*최근기획전영역*/}
                    {<PlanRecent plans={recentPlanList}/>}
                </div>
                <button className={style.planButton} onClick={ handleClickBtn }>
                    목록
                </button>
            </div>
        </>
    )

};
export default MarketingTemplate1;