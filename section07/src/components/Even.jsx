import { useEffect } from "react";

const Even = () => {
  // unmount 될 때 메모리 정리에 활용 가능
  useEffect(() => {
    // 클린업, 정리 함수
    return () => {
      console.log("unmount");
    };
  }, []);
  return <div>짝수입니다</div>;
};

export default Even;
