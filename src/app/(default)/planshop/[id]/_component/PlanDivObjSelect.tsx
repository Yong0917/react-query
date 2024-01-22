import {PlanDivObjSelectType} from "@/models/PlanCommon";
import React, {useState} from "react";
import style from "@/app/_component/tab.module.css";

export default function PlanDivObjSelect({divObjInfo, setDivobjNo} : PlanDivObjSelectType) {

    const [select, setSelect] = useState<string>('');

    const onClickGroup = (objNo : string) => {
        setDivobjNo(objNo);
        setSelect(objNo);
    }

    return (
        <div className={style.groupTab}>
            <div className={!select ? style.groupIndicator : ''} onClick={() => onClickGroup("")}> 전체 </div>
            {divObjInfo?.map((divObj) => (
                <div key={divObj.divobjNo}
                     onClick={() => onClickGroup(divObj.divobjNo)}
                     className={`${select === divObj.divobjNo ? style.groupIndicator : ''}`}>
                    {divObj.divobjNm}
                </div>
            ))}
        </div>
    );


}