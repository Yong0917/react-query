import {PlanGoodsSortType} from "@/models/PlanCommon";
import Select from "react-select";
import React, {useEffect, useState} from "react";

export default function PlanGoodSort({sort, setSort} : PlanGoodsSortType) {

    const [isMounted, setIsMounted] = useState(false);

    let selectOptions = [
        { value: '10', label: '신상순' },
        { value: '20', label: '판매순' },
        { value: '30', label: '고가순' },
        { value: '40', label: '저가순' },
        { value: '50', label: '상품평순' }
    ]

    useEffect(() => setIsMounted(true), []);

    return (
        <>
            {isMounted ?
                <Select
                    className="selectItem"
                    onChange={(e : any) => setSort(e.value)}
                    options={selectOptions}
                    placeholder="정렬 선택"
                    value={selectOptions.filter(function (setOption) {
                        return setOption.value === sort;
                    })}
                /> : <div> Loaidng...</div>}
        </>

    )


}