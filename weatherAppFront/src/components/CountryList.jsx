import '../styles/countryList.css'

const CountryList = ( {name , showInfo} ) => {
    return (
        <>
        <div className="list">
            <p >{name}</p>
            <button onClick={showInfo}>show</button>
        </div>
        </>
    )
}

export default CountryList