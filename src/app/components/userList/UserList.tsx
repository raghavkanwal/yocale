import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react"
import { getUsers } from "src/app/apis/get";
import User, { UserProp } from "../User/User";

export default function UserList() {

    const { isLoading, isError, data: userList } = useQuery({
        queryKey: ['fetchUsers'],
        queryFn: () => getUsers(),
    });

    if (isLoading) return <span>Loading....</span>;
    if (isError) return <span>An error occurred, please try again later!</span>;

    return (
        <>
            {
                userList.map((user: UserProp, idx: number) => <div><User key={`user-${idx}`} user={user}/></div>)
            }
        </>
    )
}