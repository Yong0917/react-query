import {PlanDivObjModel} from "@/models/PlanDivObjModel";
import React from "react";
import {PlanGoods} from "@/models/PlanGoods";

const PlanDivObjCoupon = (divObj: PlanDivObjModel) => {
    return (
        <>
            <div>!! 쿠폰입니다 !!</div>
            <img src={ `https://img-stg.x2bee.com/${divObj.cpnBnrImgPathNm}` } alt={""} width={200}/>
        </>
    )


}

export default PlanDivObjCoupon;