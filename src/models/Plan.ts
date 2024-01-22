import {PlanImage} from "@/models/PlanImage";

export interface Plan {
    mkdpNo: string;
    mkdpNm: string;
    tmplNo: string;
    brefDesc: string;
    introConts: string;
    pcTopYn: string;
    dispSeq: string;
    startDate: string;
    endDate: string;
    imageList: PlanImage[];
}

export interface PlanPagingModel {
    totalCount: number;
    planInfoList: Plan[]
}