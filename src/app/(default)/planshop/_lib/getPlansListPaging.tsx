export async function getPlanListPaging(param: {
    sortOption: string;
    tab: string;
    brand: string;
    pageParam: number;
    group: string
})  {
    // const [_1, _2, {tab, brand, group, sortOption}] = queryKey;

    const res = await fetch(`/api/display/v1/plan/planList?dispMediaCd=20&sortType=${param.sortOption}&pageNo=${param.pageParam}&pageSize=10&progressYn=${param.tab}&brandNo=${param.brand}&dispGrpNo=${param.group}`, {
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