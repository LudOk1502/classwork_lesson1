export default function Address({street, suite, city, zipcode, geo}) {
    return (
        <div className={'address'}>
            <div>street: {street}</div>
            <div>suite: {suite}</div>
            <div>city: {city}</div>
            <div>zipcode: {zipcode}</div>
            <div>geo: {geo}</div>

        </div>
    );
}