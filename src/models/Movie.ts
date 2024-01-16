export interface Movie {
    id :number,
    movieCd :string,
    movieNm :string,
    openDt :string,
}

export interface MovieDetailType {
    params :{ id :string }
}

export type DetailPageType = {
    id :string
}