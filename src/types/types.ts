export interface IUser {
    id: number,
    firstName: string,
    lastName: string,
    image: string
    address: {
        city: string,
    }
    username: string,
    phone: string
}

export type UsersType =  IUser[]

export interface ISearchContext {
    users: IUser[],
    query: string,
    setQuery: (s: string) => void,
    loading: boolean,
    setLoading: (b: boolean) => void,
    error: string,
    firstLoad:  boolean
}
