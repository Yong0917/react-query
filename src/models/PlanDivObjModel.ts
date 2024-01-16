import {PlanImage} from "@/models/PlanImage";
import {Plan} from "@/models/Plan";
import {PlanGoods} from "@/models/PlanGoods";


export interface PlanDivObjModel {

    divobjNo: string;
    divobjNm: string;
    divobjGbCd: string;
    dispSeq: string;
    tmplNo: string;
    textDivobjNm: string;
    bnrImgPathNm: string;
    htmlFileCont: string;
    cpnDnldYn: string;
    cpnNo: string;
    cpnBnrImgPathNm: string;
    goodsNo: string;

    goodsList: PlanGoods[];
}