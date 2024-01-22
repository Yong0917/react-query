import React from "react";
import Pagination from "react-js-pagination";
import "@/app/(default)/planshop/_component/pagingStyle.css"

export type pagingParam = {
    totalPage: number,
    limit : number,
    page: number,
    setPage: React.Dispatch<React.SetStateAction<number>>;
}
const PagingLibrary = ({totalPage, limit ,page, setPage} : pagingParam) => {

    // activePage: 현재 페이지
    // itemsCountPerPage: 한 페이지당 보여줄 리스트 아이템의 개수
    // totalItemsCount: 총 아이템의 개수
    // pageRangeDisplayed: Paginator 내에서 보여줄 페이지의 범위
    // prevPageText: "이전"을 나타낼 텍스트 (prev, <, ...)
    // nextPageText: "다음"을 나타낼 텍스트 (next, >, ...)
    // onChange: 페이지가 바뀔 때 핸들링해줄 함수

    return (
        <>
            {totalPage && totalPage > 0 ?
                <Pagination
                activePage={page}
                itemsCountPerPage={limit}
                totalItemsCount={totalPage}
                pageRangeDisplayed={5}
                onChange={(page) => setPage(page)}
            /> : null}
        </>
    );
};

export default PagingLibrary;