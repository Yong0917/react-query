// ./stores/memos.js
import create from 'zustand';
import {getIcons} from "@/app/(default)/planshop/[id]/_lib/getIcons";

interface IconBaseStore {
    icons: Record<string, string>;
    fetchIcons: () => void;
}

const UseIconStore = create<IconBaseStore>((set, get) => ({
    icons: {},
    fetchIcons: async () => {
        if(Object.keys(get().icons).length !== 0){
            return null
        }
        const iconList = await getIcons();
        const icons = iconList.reduce((iconMap: Record<number, string>, icon: { dispIconNo: number, moIconPathNm: string }) => {
            iconMap[icon.dispIconNo] = icon.moIconPathNm;
            return iconMap;
        }, {});
        await set({icons});
    },



}));

export default UseIconStore;