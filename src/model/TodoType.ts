






export type todoType = {

    id: number,
    text: string,
    completed: boolean
}

type todosMetaType = {
    total: number,
    perPage: number
}


export type todoResponseType = {
    list: todoType[],
    meta: todosMetaType
}