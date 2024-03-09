export interface IUser {
    id: number,
    firstName: string,
    lastName: string,
    image: string
    address: {
        city: string,
    }
}

export type UsersType =  IUser[]



export interface SearchContextType {
    users: UsersType ,
    setUsers?: (users: UsersType) => void,
    isLoad?: boolean,
    setIsLoad?: (b: boolean)  => (void | undefined),
    firstLoad?:  boolean
}
