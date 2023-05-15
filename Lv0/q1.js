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

  // ✔️ on 메소드
  // : 이벤트가 발생할 때 실행할 동작을 지정

  // ✔️ line 이벤트
  // : readline interface를 통해 다룰 이벤트. 사용자가 콘솔에 입력할 때 발생
  //   입력 이벤트는 입력 스트림에 줄바꿈을 나타내는 \n, \r, or \r\n 제어 문자가 나타나거나, 사용자가 Enter 또는 Return을 누를 때 발생
})
rl.on('close', () => {
  // 입력이 끝난 후 실행할 코드
  process.exit()

  // ✔️ close 이벤트
  // : Readable 스트림 종료를 제어하는 이벤트
})
