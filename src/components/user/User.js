import Address from "./address/Address";
import Company from "./company/Company";

export default function User({users, i}) {
    if (i > users.length) return <h2>Users undefined!</h2>;
    const {id, name, username, email, address, phone, website, company} = users[i];
    return (
        <div className={'user'}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <Address address={address}/>
            <div>phone: {phone}</div>
            <div>website: {website}</div>
            <Company company={company}/>
            <hr/>
        </div>
    );
}



