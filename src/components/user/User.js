import Address from "./address/Address";
import Company from "./company/Company";

export default function User({
                                 id,
                                 name,
                                 username,
                                 email,
                                 street,
                                 suite,
                                 city,
                                 zipcode,
                                 lat,
                                 lng,
                                 phone,
                                 website,
                                 company_name,
                                 catchPharase,
                                 bs
                             }) {
    return (
        <div className={'user'}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <Address street={street}
                     suite={suite}
                     city={city}
                     zipcode={zipcode}
                     lat={lat}
                     lng={lng}
            />
            <div>phone: {phone}</div>
            <div>website: {website}</div>
            <Company name={company_name}
                     catchPhrase={catchPharase}
                     bs={bs}/>
            <hr/>
        </div>
    );
}



