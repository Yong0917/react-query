import axios from "axios";

export async function getBrandsList() {
    // const planBrandNoInfo = (await $axios.get(`/api/display/v1/plan/brand?dispMediaCd=20`)).data

// .then(response => response.json().then(data => data.payload.planInfoList));
//     const res = await fetch(`/api/display/v1/plan/brand?dispMediaCd=20`, {
//         next: {
//             tags: ['plans','brands'],
//         },
//         credentials: 'include',
//         cache: 'no-store'
//     });
//
//     if(res){
//         return res.json()
//     }
    const res = await axios.get(`/api/display/v1/plan/brand`, {
        params: {
            dispMediaCd : 20
        }
    });

    return res.data;
}