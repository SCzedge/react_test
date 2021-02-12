import React from 'react'
export default function Profile({user}){
    const {email, password, name} = user || {}
    return(
        <>
            <h1>Profile</h1>
            <dt>email</dt>
            <dd>{email}</dd>
            <dt>Password</dt>
            <dd>{password}</dd>
            <dt>name</dt>
            <dd>{name}</dd>
        </>
    )
}