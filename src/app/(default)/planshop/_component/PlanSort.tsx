import React, {useEffect, useState} from "react";
import Select from "react-select";
import {PlanSortType} from "@/models/PlanCommon";

export default function PlanSort({sortOption, setSortOption} : PlanSortType) {

    const [isMounted, setIsMounted] = useState(false);

    let selectOptions = [
        { value: 'recent', label: '최신 순' },
        { value: 'close', label: '마감 순' }
    ]

    useEffect(() => setIsMounted(true), []);

    return (
        <>
            {isMounted ?
                <Select
                    className="selectItem"
                    onChange={(e : any) => setSortOption(e.value)}
                    options={selectOptions}
                    placeholder="정렬 선택"
                    value={selectOptions.filter(function (setOption) {
                        return setOption.value === sortOption;
                    })}
                /> : null}
        </>
    )


}