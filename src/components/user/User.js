export default function User({id, name, username, email, address, phone, website, company}) {
    return (
        <div className={'user'}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <div>address: {address}</div>
            <div>phone: {phone}</div>
            <div>website: {website}</div>
            <div>company: {company}</div>
            <hr/>
        </div>
    );
}



