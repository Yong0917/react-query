import {LayoutType} from "@/models/baseType";
import style from "./layout.module.css"
import RQProvider from "@/app/(default)/_component/RQProvider";


export default function DefaultLayout({ children } :LayoutType) {
    return (
        <main className={ style.container }>
            <RQProvider>
                { children }
            </RQProvider>
        </main>
    )
}