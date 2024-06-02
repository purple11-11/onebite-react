// 3가지 hook 관련된 팁

import { useState } from "react";
import useInput from "../hooks/useInput";

const HookExam = () => {
  // 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
  const state = useState();

  // 2. 조건부로 hook을 호출할 수 없다.
  /*   if(true) {
        const state = useState();
    }
    for(~~) {

    } */

  // 3. 나만의 훅(custom hook)을 직접 만들 수 있다.
  const [input, onChange] = useInput();
  const [input2, onChange2] = useInput();
  return (
    <div>
      <input type="text" value={input} onChange={onChange} />
      <input type="text" value={input2} onChange={onChange2} />
    </div>
  );
};

export default HookExam;
