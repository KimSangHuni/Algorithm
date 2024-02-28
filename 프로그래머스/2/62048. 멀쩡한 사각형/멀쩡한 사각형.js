function solution(w, h) {

    if(w === h) return w * h - w;
    if(w === 1 || h === 1) return 0;

    let notSquare = 0;
    for(let i = 1; i <= w; i++) {
        notSquare += (Math.ceil((i * h) / w) - Math.floor(((i - 1) * h) / w));
    }
    
    return w * h - notSquare;
}