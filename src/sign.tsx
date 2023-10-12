import React, { useState } from 'react';
import '../styles/';

type User = {
  email: string;
  password: string;
  confirmPassword: string;
  username: string;
};

function sign() {
  const [user, setUser] = useState<User>({
    email: '',
    password: '',
    confirmPassword: '',
    username: '',
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const checkEmailAvailability = () => {
    // 여기에서 이메일 중복 체크 로직을 수행할 수 있습니다.
    // 이 예제에서는 단순히 중복되지 않았다고 가정합니다.
    setIsEmailValid(true);
  };

  const validateForm = () => {
    if (
      user.email &&
      user.password &&
      user.confirmPassword &&
      user.username &&
      user.password === user.confirmPassword &&
      isEmailValid
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
      alert('양식을 올바르게 작성해주세요.');
    }
  };

  const handleRegister = () => {
    if (isFormValid) {
      // 여기에서 회원가입 로직을 수행하면 됩니다.
      alert('회원가입이 성공적으로 완료되었습니다.');
    } else {
      alert('양식을 먼저 확인하세요.');
    }
  };

  return (
    <div className="signup-container">
      <h1>회원가입</h1>
      <div>
        <label>이메일:</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleInputChange}
          onBlur={checkEmailAvailability}
        />
        {!isEmailValid && <span className="error-message">이메일이 이미 사용 중입니다.</span>}
      </div>
      <div>
        <label>비밀번호:</label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>비밀번호 확인:</label>
        <input
          type="password"
          name="confirmPassword"
          value={user.confirmPassword}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>닉네임:</label>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={validateForm}>양식 검증</button>
      <button onClick={handleRegister}>가입</button>
    </div>
  );
}

export default sign;
