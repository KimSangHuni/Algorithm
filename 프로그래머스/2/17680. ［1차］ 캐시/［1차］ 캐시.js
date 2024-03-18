function solution(cacheSize, cities) {
    var runtime = 0;
    let cache = [];
    const citiesLength = cities.length;
    if(cacheSize === 0) return citiesLength * 5;
    
    for(let i = 0; i < citiesLength; i++) {
        const findCity = cities[i].toLowerCase();
        const pointer = cache.indexOf(findCity);
        
        if(-1 < pointer) {
            cache.splice(pointer, 1);
            runtime += 1;
        }
        else {
            if(cache.length === cacheSize) {
                cache.shift();
            }
            runtime += 5;
        }
        cache.push(findCity);
    }
    
    return runtime;
}
