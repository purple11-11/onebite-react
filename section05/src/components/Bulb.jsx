import { useState } from "react";

//
// 한 컴포넌트 안에 여러 state가 있을 경우 자식 컴포넌트는 부모 컴포넌트에 영향을 받아 의도치 않게 동작할 수 있다.
// 이를 방지하기 위해 관련있는 컴포넌트별로 분류해서 사용하는 것이 좋다.

// Bulb와 Counter 컴포넌트는 .jsx 파일로 분리 가능

const Bulb = () => {
  const [light, setLight] = useState("OFF");

  console.log(light);
  return (
    <div>
      {light === "ON" ? (
        <h1 style={{ backgroundColor: "orange" }}>ON</h1>
      ) : (
        <h1 style={{ backgroundColor: "gray" }}>OFF</h1>
      )}

      <button
        onClick={() => {
          setLight(light === "OFF" ? "ON" : "OFF");
        }}
      >
        {light === "OFF" ? "전구 켜기" : "전구 끄기"}
      </button>
    </div>
  );
};

export default Bulb;
