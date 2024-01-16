import axios from "axios";


export async function getIcons() {
  const res = await axios.get(`https://venus-mo.x2bee.com/api/display/v1/icon`, {
    params: {
      iconTypCd: '100',
      dispMediaCd: '20'
    }
  })

  return res.data.reduce((iconMap: Record<number, string>, icon: { dispIconNo: number, moIconPathNm: string }) => {
    iconMap[icon.dispIconNo] = icon.moIconPathNm;
    return iconMap;
  }, {});

}
