import style from "../../../_component/tab.module.css";
import React, {useState} from "react";
import {useQuery} from "@tanstack/react-query";
import BaseLoading from "@/app/(default)/_component/BaseLoading";
import {getGroupsList} from "@/app/(default)/planshop/_lib/getGroupsList";
import {PlanGroupType} from "@/models/PlanCommon";
import {PlanGroupModel} from "@/models/PlanGroupModel";

export default function PlanGroup({group, setGroup} : PlanGroupType) {


    const [select, setSelect] = useState<string>('');

    const { data, isLoading,error } = useQuery<PlanGroupModel[]>({
        queryKey: ['plans', 'groups'],
        queryFn: getGroupsList
    })

    const onClickGroup = (dispGrpNo : string) => {
        setGroup(dispGrpNo);
        setSelect(dispGrpNo);
    }

    if ( isLoading ) {
        return <BaseLoading />
    }

    return (
        <div className={style.groupTab}>
            <div className={!select ? style.groupIndicator : ''} onClick={() => onClickGroup("")}> 전체 </div>
            {data?.map((group) => (
                <div key={group.dispGrpNo}
                     onClick={() => onClickGroup(group.dispGrpNo)}
                     className={`${select === group.dispGrpNo ? style.groupIndicator : ''}`}>
                    {group.dispGrpNm}
                </div>
            ))}
        </div>
    );
}