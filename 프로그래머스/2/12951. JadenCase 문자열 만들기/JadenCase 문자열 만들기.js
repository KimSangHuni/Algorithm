function solution(s) {
    const cut = s.split(" ");
    return cut.map(str => str.charAt(0).toUpperCase() + str.substr(1).toLowerCase()).join(" ");;
}