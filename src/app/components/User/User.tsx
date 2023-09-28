export type UserProp = {
    id: number,
    firstName: string,
    lastName: string,
    dob: string,
    address: string,
    image:string
}
export default function User(props: UserProp | any) {
    console.log(props)
    return (<span>User: { `${props.user.firstName} ${props.user.lastName}`}</span>)
}