import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import { useState, useEffect, useRef } from "react";
import Even from "./components/Even";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const isMount = useRef(false);

  // [7.3) useEffect로 라이프사이클 제어하기]
  // 1. 마운트: 탄생 (deps 빈 배열)
  useEffect(() => {
    console.log("mount");
  }, []); // deps를 빈 배열로 두면, mount 될 때만 콜백함수 실행된다.

  // 2. 업데이트: 변화, 리렌더링 (deps 생략)
  // 2-1. (기본) 마운트 + 업데이트 마다 콜백 실행
  // useEffect(() => {
  //   console.log("update");
  // });

  // 2-2. 업데이트 될 때만 콜백 실행 (마운트 때 실행 안됨)
  // useRef를 update flag로 사용
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update");
  });

  // 3. 언마운트: 죽음
  /* <Even/> 컴포넌트 코드 참고 */

  // [7.2) useEffect 사용하기]
  /*   useEffect(() => {
    console.log(`count: ${count} / input: ${input}`); // 변경된 state값 바로 적용됨
  }, [count, input]); // state가 update 될 때 마다 첫번째 인수인 콜백함수 실행됨
  // 의존성 배열(dependency array, deps)
  */

  // Controller 컴포넌트로 내려줄 이벤트 핸들러
  const onClickButton = (value) => {
    setCount(count + value);

    // useEffect로 라이프사이클을 제어하는 이유
    // console.log(count); // 위의 비동기 함수인 setCount 함수는 호출만 된 것이지 동작이 완료 된것은 아님
    // 따라서, count state는 값이 아직 변경되지 않았기 때문에 console.log로 출력값을 찍으면 출력되지 않는다.
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>

      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
