import axios from "axios";

const displayUrl = process.env.NEXT_PUBLIC_BASE_DP_URL
export async function getBrandsList() {
    const res = await axios.get(`${displayUrl}/v1/plan/brand`, {
        params: {
            dispMediaCd : 20
        }
    });

    return res.data;
}