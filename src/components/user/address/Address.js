import Geo from "./geo/Geo";

export default function Address({street, suite, city, zipcode, lng, lat}) {
    return (
        <div className={'address'}>
            address:
            <div>street: {street}</div>
            <div>suite: {suite}</div>
            <div>city: {city}</div>
            <div>zipcode: {zipcode}</div>
            <Geo lat={lat}
                 lng={lng}
            />
        </div>
    );
}