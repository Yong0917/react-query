import axios from "axios";

const displayUrl = process.env.NEXT_PUBLIC_BASE_DP_URL
export async function getPlanListPaging(param: {
    sortOption: string;
    tab: string;
    brand: string;
    pageParam: number;
    group: string
})  {

    console.log('pageParama : ' + param.pageParam )

    return await axios.get(`${displayUrl}/v1/plan/planList`, {
        params: {
            dispMediaCd : 20,
            sortType: param.sortOption,
            pageNo: param.pageParam,
            pageSize: 5,
            progressYn: param.tab,
            brandNo: param.brand,
            dispGrpNo: param.group
        }
    }).then( (res) => {
        return res.data.payload;
    });
}