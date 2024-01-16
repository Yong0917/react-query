import axios from "axios";
import {planDetailParams} from "@/models/PlanCommon";
import {useSearchParams} from "next/navigation";

type Props = {
    queryKey: [_1: string, _2: string, {id: string, previewDate: string, dataLangCd: string}] | any,
}

export default async function getPlanDetail(id: string) {

    // const [ _1, _2, {id, previewDate, dataLangCd}] = queryKey
    const res = await axios.get(`https://venus-mo.x2bee.com/api/display/v1/plan/planDetail/${id}`, {
        params: {
            dispMediaCd: 20,
            dispYn: 'Y',
            previewDate: planDetailParams.previewDate,
            dataLangCd: planDetailParams.dataLangCd,
        }
    })
    return res.data
}

