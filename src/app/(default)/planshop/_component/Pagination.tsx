import React, {useEffect, useState} from "react";
import style from "@/app/_component/tab.module.css";

export type pagingParam = {
    totalPage: number,
    limit : number,
    page: number,
    setPage: React.Dispatch<React.SetStateAction<number>>;
}
const PaginationCustom = ({ totalPage, limit, page, setPage } : pagingParam) => {

    // totalPage - 리스트 총 갯수
    // limit - 페이징 리스트 개수
    // page - 현재 페이지수
    // setPage - 현재 페이지수 set

    // 현재 페이지 번호들을 저장하는 State
    const [currentPageArray, setCurrentPageArray] = useState<number[]>([]);
    // 전체 페이지 번호들을 저장하는 State
    const [totalPageArray, setTotalPageArray] = useState<number[][]>([]);

    const totalPageParam = Math.ceil(totalPage / limit);

    // 전체 페이지 수를 limit 단위로 나누어 페이지 배열 생성
    const sliceArrayByLimit = (totalPageParam: number, limit: number) => {
        const totalPageArray = Array(totalPageParam).fill(0).map((_, i) => i);
        return Array(Math.ceil(totalPageParam / limit)).fill(0)
            .map(() => totalPageArray.splice(0, limit));
    };

    useEffect(() => {
        // 현재 페이지 배열 설정
        setCurrentPageArray(totalPageArray[Math.floor((page - 1) / limit)]);
    }, [page]);


    useEffect(() => {
        // 페이지 수에 따라 배열 생성 및 초기 페이지 설정(totalPageParam)
        const slicedPageArray = sliceArrayByLimit(totalPageParam, limit);
        setTotalPageArray(slicedPageArray);
        setCurrentPageArray(slicedPageArray[0]);
    }, [totalPageParam]);


    return (
        <>
            {totalPageParam > 0 ?
                <div style={{display:'flex', justifyContent:'center'}}>
                    <button style={{marginRight:'5px'}} onClick={() => setPage(1)} disabled={page === 1}>&laquo;</button>
                    <button style={{marginRight:'5px'}} onClick={() => setPage(page - 1)} disabled={page === 1}>&lsaquo;</button>
                    <div>
                        {currentPageArray?.map((i : number) =>
                            <button style={{marginRight:'5px'}} key={i + 1}
                                    className={`${page === i + 1 ? style.groupIndicator : ''}`}
                                    onClick={() => setPage(i + 1)}>
                                {i + 1}
                            </button>
                        )}
                    </div>
                    <button
                        style={{marginRight:'5px'}}
                        onClick={() => setPage(page + 1)}
                        disabled={page === totalPageParam}
                    >
                        &rsaquo;
                    </button>
                    <button
                        style={{marginRight:'5px'}}
                        onClick={() => setPage(totalPageParam)}
                        disabled={page === totalPageParam}
                    >
                        &raquo;
                    </button>
                </div> : null}
        </>

    );
};

export default PaginationCustom;