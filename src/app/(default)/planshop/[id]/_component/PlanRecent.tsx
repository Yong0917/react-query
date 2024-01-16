import React from "react";
import {Plan} from "@/models/Plan";
import Link from "next/link";

const PlanRecent = (divObj: Plan[]) => {
    return (
        <>
            { divObj.map(( plan) => (
                <Link href={`/planshop/${plan.mkdpNo}`} key={ plan.mkdpNo }>
                    <div>
                        { plan.imageList[0].contGbCd === '10' ?
                            <img src={ `https://img-stg.x2bee.com/${plan.imageList[0].bnrImgPathNm}` } alt={""} width={200}/> :
                            <video src={ `https://img-stg.x2bee.com/${plan.imageList[0].bnrImgPathNm}`}
                                   autoPlay={true}></video>
                        }
                    </div>
                    <div>
                        <h4>{ plan.mkdpNm }</h4>
                    </div>
                </Link>
            ))}
        </>
    )
}

export default PlanRecent;