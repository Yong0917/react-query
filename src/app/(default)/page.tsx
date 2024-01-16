import Link from "next/link";
import style from "./page.module.css"


export default function Index() {
    return (
        <>
            <Link href={'/planshop'} className={ style.planBtn }>기획전 목록</Link>
        </>
    )
}