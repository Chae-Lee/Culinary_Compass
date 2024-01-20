import michelin from '../michelin.json' assert {type: 'json'}

function resultFilter(value){
    const result = michelin.filter(michelin => michelin.Country == " " + value)
    return result
}

export default resultFilter;