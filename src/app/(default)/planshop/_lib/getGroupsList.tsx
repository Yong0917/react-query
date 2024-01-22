import axios from "axios";

const displayUrl = process.env.NEXT_PUBLIC_BASE_DP_URL
export async function getGroupsList() {

    const res = await axios.get(`${displayUrl}/v1/plan/group`, {
        params: {
        }
    });

    return res.data;
}