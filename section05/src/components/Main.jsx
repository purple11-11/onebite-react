const Main = () => {
  const user = {
    name: "윤영인",
    isLogin: false,
  };

  return <>{user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}</>;
};

export default Main;
