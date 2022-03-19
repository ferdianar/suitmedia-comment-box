export interface ICommentsList {
    [x: string]: any
    id: string
    author: string
    avatar: string
    date: string
    message: string
    images: string
    increment: any
    decrement: any
    point: number
    replyAuthor?: string
    replyDate?: string
    replyMessage?: string
    replyPoint?: number
}