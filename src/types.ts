export interface CourseInfo {
    code: string,
    title: string,
    description: string
    min_units: number
    max_units: number
}

export interface ReqInfo {
    numRequired: string,
    courseOptions: CourseInfo[]
}

export interface TrackInfo {
    requirements: ReqInfo[]
}