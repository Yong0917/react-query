import axios from "axios";

type Props = {
    pageParam :number
    queryKey: [_1: string, _2: string, {tab: string, brand: string, group: string, sortOption: string}] | any,
}

const displayUrl = process.env.NEXT_PUBLIC_BASE_DP_URL

export async function getPlansList({ pageParam, queryKey } :Props) {
    const {tab, brand, group, sortOption} = queryKey;

    console.log('test : ' + pageParam)

    return await axios.get(`${displayUrl}/v1/plan/planList`, {
        params: {
            dispMediaCd : 20,
            sortType: sortOption,
            pageNo: pageParam,
            pageSize: 5,
            progressYn: tab,
            brandNo: brand,
            dispGrpNo: group
        }
    }).then( (res) => {
        return res.data.payload.planInfoList;
    });

    // const res = await axios.get(`${displayUrl}/v1/plan/brand`, {
    //     params: {
    //         dispMediaCd : 20
    //     }
    // });
// .then(response => response.json().then(data => data.payload.planInfoList));
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.


}