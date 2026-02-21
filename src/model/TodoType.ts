






export type todoType = {

    id: number,
    text: string,
    completed: boolean
}

type todosMetaType = {
    total: number,
    perPage: number
    page:number
}


export type todoResponseType = {
    list: todoType[],
    meta: todosMetaType
}