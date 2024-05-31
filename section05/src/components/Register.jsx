import { useState } from "react";

// 간단한 회언가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4.자기소개

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const onChange = (e) => {
    console.log(e.target.name, e.target.value);
    setInput({
      ...input,
      // e.target.name 이 key 가 됨
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div>
        <input type="text" name="name" placeholder="이름" onChange={onChange} value={input.name} />
      </div>
      <div>
        <input type="date" name="birth" onChange={onChange} value={input.birth} />
      </div>
      <div>
        <select value={input.country} name="country" onChange={onChange}>
          <option value={""}></option>
          <option value={"kr"}>한국</option>
          <option value={"us"}>미국</option>
          <option value={"uk"}>영국</option>
        </select>
      </div>

      <div>
        <textarea value={input.bio} name="bio" onChange={onChange} />
      </div>
    </div>
  );
};

export default Register;
