export default function Company({name, catchPhrase, bs}) {
    return (
        <div className={'company'}>
            <div>name: {name}</div>
            <div>catchPhrase: {catchPhrase}</div>
            <div>bs: {bs}</div>
        </div>
    );
}
