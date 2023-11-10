import '../styles/country.css'

const Country = ({name, capital, area, languages, flag, temperature, wind, iconURL}) => {
    const loopObj = () => {
        let languagesArr = []
        for (let lang in languages) {
            languagesArr.push(languages[lang])
        }
        return languagesArr
    }  
    return (
        <>
        <div className="result-summary">
            <div className="info grid-flow" data-spacing="large">
                <h1 className= "section-title">{name}</h1>
                <div className="grid-flow">
                    <p>capital: {capital}</p>
                    <p>area: {area}</p>
                </div>
                <h2>Languages</h2>
                { 
                loopObj().map(e => <li key = {e}>{e}</li>) 
                }
                <img src={flag} alt="flag" />
            </div>
            <div className="weather grid-flow "data-spacing="large">
                <h2 className= "section-title">Weather in {name}</h2>
                <p>Temperature {Math.round(temperature-273.15)} Celsius </p>
                <div className="circle">
                    <img src={iconURL} alt="weather icon" />
                </div>
                <p>Wind {wind} m/s </p>
            </div>          
        </div>
        </>
    )
}

export default Country