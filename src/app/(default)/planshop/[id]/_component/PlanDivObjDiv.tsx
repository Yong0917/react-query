import {PlanDivObjModel} from "@/models/PlanDivObjModel";
import React from "react";

const PlanDivObjDiv = (divObj : PlanDivObjModel) => {

    return ({
        '10' : <h3>{ divObj.textDivobjNm }</h3>,
        '20' : <img src={ `https://img-stg.x2bee.com/${divObj.bnrImgPathNm}` } alt={""} width={1100}/>,
        '30' : <div dangerouslySetInnerHTML={{__html:divObj?.htmlFileCont || ''}}></div>
    }[divObj.divobjGbCd] )

    // switch (divObj.divobjGbCd){
    //     case '10':
    //         return <h3>{ divObj.textDivobjNm }</h3>
    //     case '20':
    //         return <img src={`https://img-stg.x2bee.com/${divObj.bnrImgPathNm}` } alt={""} width={1100}/>
    //     case '30':
    //         return <div dangerouslySetInnerHTML={{__html:divObj.htmlFileCont || ''}}></div>
    //     default:
    //         return <div> 구분자가 없습니다.</div>
    // }
}

export default PlanDivObjDiv;