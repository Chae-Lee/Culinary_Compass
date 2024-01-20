import michelin from '../michelin.json' assert {type: 'json'}


function resultFilter(){
    const result = michelin.filter(michelin => michelin.Award == "/images/michelin-three.png")
    return result
}

export default resultFilter;