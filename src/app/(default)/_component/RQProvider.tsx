"use client";


import React, {useState} from "react";
import {QueryClientProvider, QueryClient} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";


type Props = {
    children: React.ReactNode;
};


function RQProvider({children}: Props) {
    const [client] = useState(
        new QueryClient({
            defaultOptions: {  // react-query 전역 설정
                queries: {
                    refetchOnWindowFocus: false, // 탭을 이동했다가 다시 돌아올 때
                    retryOnMount: true, // 다시 마운트 될 떄
                    refetchOnReconnect: false, // 네트워크 이슈로 다시 연결될 때
                    retry: false, // 실패했을 때 재시도 하기
                },
            },
        })
    );

    return (
        <QueryClientProvider client={client}>
            {children}
            <ReactQueryDevtools initialIsOpen={process.env.NEXT_PUBLIC_MODE === 'local' }/>
        </QueryClientProvider>
    );
}


export default RQProvider;