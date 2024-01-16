import axios from "axios";

export async function getGroupsList() {
    // const planBrandNoInfo = (await $axios.get(`/api/display/v1/plan/brand?dispMediaCd=20`)).data

// .then(response => response.json().then(data => data.payload.planInfoList));
//     const res = await fetch(`/api/display/v1/plan/group`, {
//         next: {
//             tags: ['plans','groups'],
//         },
//         credentials: 'include',
//         cache: 'no-store'
//     });
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    const res = await axios.get(`/api/display/v1/plan/group`, {
        params: {
        }
    });

    return res.data;
    // if(res){
    //     return res.json()
    // }
}