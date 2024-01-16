import {PlanImage} from "@/models/PlanImage";
import {Plan} from "@/models/Plan";
import {PlanDivObjModel} from "@/models/PlanDivObjModel";


export interface PlanDetailModel {

    resultCd: string;
    resultMsg: string;
    mkdpNo: string;
    mkdpNm: string;
    tmplNo: string;
    tmplFileNm: string;
    startDate: string;
    endDate: string;
    introCont: string;
    briefDescription: string;
    titleHtml: string;
    titleHtmlPc: string;
    footerContents: string;
    wishContYn: string;
    pcTopYn: string;
    staffYn: string;
    planDivObjList: PlanDivObjModel[];
    recentPlanList: Plan[];
    titleImgMovList: PlanImage[];
}

export interface PlanInfoType {
    planInfo :PlanDetailModel
}