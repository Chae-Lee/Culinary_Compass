import michelin from '../michelin.json' assert {type: 'json'}

function resultFilter(key, value){
    const result = michelin.filter(entry => entry[key] == value)
    return result
}

export default resultFilter;