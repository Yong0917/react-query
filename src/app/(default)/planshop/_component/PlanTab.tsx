import style from '../../../_component/tab.module.css';
import React from "react";
import {PlanTabType} from "@/models/PlanCommon";

export default function PlanTab({tab, setTab} : PlanTabType) {
    // const { tab, setTab} = useContext(TabContext);
    const onClickProgress = () => {
        setTab("Y");
    }
    const onClickPast = () => {
        setTab("N");
    }

    return (
        <div className={style.homeFixed}>
            <div className={style.homeTab}>
                <div onClick={onClickProgress}>
                    진행 중인 기획전
                    <div className={style.tabIndicator} hidden={tab === 'N'}></div>
                </div>
                <div onClick={onClickPast}>
                    지난 기획전
                    <div className={style.tabIndicator} hidden={tab === 'Y'}></div>
                </div>
            </div>
        </div>
    )
}