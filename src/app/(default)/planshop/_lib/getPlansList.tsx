type Props = {
    pageParam :number
    queryKey: [_1: string, _2: string, {tab: string, brand: string, group: string, sortOption: string}] | any,
}

export async function getPlansList({ pageParam, queryKey } :Props) {
    const [_1, _2, {tab, brand, group, sortOption}] = queryKey;

    const res = await fetch(`/api/display/v1/plan/planList?dispMediaCd=20&sortType=${sortOption}&pageNo=${pageParam}&pageSize=10&progressYn=${tab}&brandNo=${brand}&dispGrpNo=${group}`, {
        next: {
            tags: ['plans', 'list'],
        },
        credentials: 'include',
        cache: 'no-store'
    });
// .then(response => response.json().then(data => data.payload.planInfoList));
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if(res){
        return res.json().then(data => data.payload.planInfoList)
    }
}