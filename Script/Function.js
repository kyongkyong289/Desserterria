function mapGenerate(seed, size) {
    var map = [];
    var temp = [];
    
    if (seed === 1) {
        for (var i = 0; i < size; i++) {
            temp = [];
            for (var j = 0; j < size; j++) {
                temp.push(10001);
            }
            map.push(temp);
        }
    }
    
    return map;
}
