// 문자열 출력하기
// : 문자열 str이 주어질 때, str을 출력하는 코드를 작성해 보세요.

const readline = require("readline")
const rl = readline.createInterface({
  // 모듈을 이용해 입출력을 위한 인터페이스 객체 생성
  input: process.stdin,
  output: process.stdout
})

// 생성한 rl 변수 사용법
rl.on("line", (line) => {
  // 한 줄씩 입력받은 후 실행할 코드. 입력값은 line에 저장
  console.log(line)
  rl.close() // 꼭 close 해줘야됨. 아니면 입력을 무한정 받음
})
rl.on('close', () => {
  // 입력이 끝난 후 실행할 코드
  process.exit()
})
