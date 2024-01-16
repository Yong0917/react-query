import {PlanImage} from "@/models/PlanImage";
import {Plan} from "@/models/Plan";


export interface PlanGoods {

    goodsNo : string;
    goodsRepImgPathNm : string;
    goodsNm: string;
    aplyPrc: number;
    rcntSalePrc: number;
    dcRate: string;
    iconList: string[];

}

export interface IconList {
    iconList: string[];
}