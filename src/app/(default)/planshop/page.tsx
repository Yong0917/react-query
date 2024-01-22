import style from "@/app/(default)/planshop/page.module.css";
import BackButton from "@/app/_component/BackButton";
import {dehydrate, HydrationBoundary, QueryClient} from "@tanstack/react-query";
import {getPlansList} from "@/app/(default)/planshop/_lib/getPlansList";
import {getBrandsList} from "@/app/(default)/planshop/_lib/getBrandsList";
import {PlanListPagingParam, PlanListParam} from "@/models/PlanCommon";
import {getGroupsList} from "@/app/(default)/planshop/_lib/getGroupsList";
import PlanList from "@/app/(default)/planshop/_component/PlanList";
import {getPlanListPaging} from "@/app/(default)/planshop/_lib/getPlansListPaging";

export default async function PlanShopPage() {
    const queryClient = new QueryClient()

    // await queryClient.prefetchQuery({
    //     queryKey: ['plans', 'brands'],
    //     queryFn: getBrandsList,
    // })
    //
    // await queryClient.prefetchQuery({
    //     queryKey: ['plans', 'groups'],
    //     queryFn: getGroupsList,
    // })

    // 무한 스크롤
    // await queryClient.prefetchInfiniteQuery({
    //     queryKey: ['plans', 'list', PlanListParam],
    //     queryFn: getPlansList,
    //     initialPageParam: 1, // 초기 페이지 설정
    // })
    // await queryClient.prefetchQuery({
    //     queryKey: ['plans', 'list', PlanListPagingParam],
    //     queryFn: () => getPlanListPaging(PlanListPagingParam),
    // })

    const dehydratedState = dehydrate( queryClient )

    return (
        <main className={ style.container }>
            <div className={ style.movieWrap }>
                <BackButton />
                <HydrationBoundary state={ dehydratedState }>
                    <PlanList />
                </HydrationBoundary>
            </div>
        </main>
    )
}