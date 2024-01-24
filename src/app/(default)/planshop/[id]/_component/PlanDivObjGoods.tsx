import React, {Fragment} from "react";
import Link from "next/link";
import IconLists from "@/app/(default)/planshop/[id]/_component/IconLists";
import {PlanGoodsType} from "@/models/PlanCommon";

export default function PlanDivObjGoods({divObjGoods, divObjKey} : PlanGoodsType){

    return (
        divObjGoods?.map((good) => (
            <Fragment key={`${divObjKey}_${good.goodsNo}`}>
                <Link href={`/planshop`}>
                    <img src={ `https://img-stg.x2bee.com/${good.goodsRepImgPathNm}` } alt={""} width={200}/>
                    <div>
                        <div>
                            {good.goodsNm}
                        </div>
                        <IconLists iconList={good?.iconList}/>
                    </div>
                </Link>
            </Fragment>
        ))
    )
}