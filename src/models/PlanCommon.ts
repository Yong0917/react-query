import React from "react";
import {PlanDivObjModel} from "@/models/PlanDivObjModel";
import {Plan} from "@/models/Plan";
import {PlanImage} from "@/models/PlanImage";
import {useSearchParams} from "next/navigation";
import {PlanGoods} from "@/models/PlanGoods";
import Plans from "@/app/(default)/planshop/_component/Plans";

// PlanList
export let PlanListParam = {
    tab: 'Y',
    brand: '',
    group: '',
    sortOption: 'recent'
}
export let PlanListPagingParam = {
    tab: 'Y',
    brand: '',
    group: '',
    sortOption: 'recent',
    pageParam: 1
}


export type PlanTabType = {
    tab: string
    setTab: React.Dispatch<React.SetStateAction<string>>;
}

export type PlanBrandType = {
    brand: string
    setBrand: React.Dispatch<React.SetStateAction<string>>;
}

export type PlanGroupType = {
    group: string
    setGroup: React.Dispatch<React.SetStateAction<string>>;
}

export type PlanSortType = {
    sortOption: string
    setSortOption: React.Dispatch<React.SetStateAction<string>>;
}

export type PlanSearchParamType = {
    tab: string
    brand: string
    group: string
    sortOption: string
}


export interface PlanDetailPageType {
    params :{ id :string }
}
// planDetail
export interface PlanDetailIdType {
    id : string
}

export class PlanDetailParams {
    previewDate: string = '';
    dataLangCd: string = '';
    setParams(searchParams: URLSearchParams) {
        this.previewDate = searchParams.get('previewDate') || '';
        this.dataLangCd = searchParams.get('dataLangCd') || '';
    }
}

export type PlanType = {
    id : string
    previewDate : string
    dataLangCd : string
}


export type Props = {
    tab: string
    brand: string
    group: string
    sortOption: string
}

export type PlanDetailType = {

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

export let PlanGoodsParam = {
    id: '',
    divobjNo: '',
    sort: '10',
}

export type PlanGoodsSortType = {
    sort: string
    setSort: React.Dispatch<React.SetStateAction<string>>;
}

export type PlanDivObjSelectType = {
    divObjInfo: PlanDivObjModel[]
    // divobjNo: string
    setDivobjNo: React.Dispatch<React.SetStateAction<string>>;
}

export type PlanDivObjType = {
    planDivObjInfo: PlanDivObjModel[]
    mkdpNo: string;
}

export type PlanGoodsType = {
    divObjGoods: PlanGoods[]
    divObjKey: string;
}




export type PlanGoodsParamType = {
    mkdpNo: string
    divobjNo: string
    sort: string
}

export const planDetailParams = new PlanDetailParams();