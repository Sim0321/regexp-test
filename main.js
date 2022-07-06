// 표현 = 패턴
// 옵션 = 패턴을 어떠한 방식으로 검색할것인지에 대한 옵션
//따옴표를 사용하면 엔터를 눌러 줄바꿈을 할 수가없다. 하지만 백틱 기호는 가능함
let str = `
010-1234-5678
thesecon@gmail.com
https;//www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:5000
동해물과_ 백두산이 마르고 닳도록
`

const h = `  the hello world    !

`
// 정규식 생성
//const regexp = new RegExp('the','gi')
// const regexp = /the/gi
// console.log(str.match(regexp))

// 메소드
// const regexp = /fox/gi
// // console.log(regexp.test(str))
// str = str.replace(regexp, 'AAA')
// console.log(str)

// 플래그
// console.log(str.match(/\.$/gim))

//패턴
// console.log(str.match(/^T/gim))
// console.log( str.match(/d$/g))
// console.log(str.match(/h..p/g))
// console.log(str.match(/fox|dog/g))
// console.log(str.match(/https?/g))
// console.log(str.match(/\b\w{2,3}\b/g))
// console.log(str.match(/[0-9]{1,}/g))
// console.log(str.match(/[가-힣]{1,}/g))
// console.log(str.match(/\bf\w{1,}\b/g))
// console.log(str.match(/\d{1,}/g))
// console.log(h.replace(/\s/g,''))
console.log(str.match(/.{1,}(?=@)/g))
console.log(str.match(/(?<=@).{1,}/g))


