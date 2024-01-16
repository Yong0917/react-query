
import {planDetailParams} from "@/models/PlanCommon";
import axios from "axios";

type Props = {
    queryKey: [_1: string, _2: string, {id: string, divobjNo:string, sort:string }] | any,
}

export default async function getPlanGoods(param: { id: string; sort: string; divobjNo: string }) {
    // const [ _1, _2, {id, divobjNo, sort}] = queryKey

    const res = await axios.get(`https://venus-mo.x2bee.com/api/display/v1/plan/planGoodsInfo`, {
        params: {
            mkdpNo: param.id,
            divobjNo: param.divobjNo,
            sort: param.sort,
            dispMediaCd: '20'
            // dataLangCd: planDetailParams.dataLangCd,
        }
    })
    return res.data
}