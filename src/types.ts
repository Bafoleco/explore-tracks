export interface CourseInfo {
    code: string,
    title: string,
    description: string
}

export interface ReqInfo {
    numRequired: string,
    courseOptions: CourseInfo[]
}

export interface TrackInfo {
    requirements: ReqInfo[]
}