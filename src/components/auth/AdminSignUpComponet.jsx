import React from 'react'
import styled from 'styled-components';
import palette from '../../libs/styles/palette';
import AuthTemplate from './template/AuthTemplate';

const SignUpFormBlcok = styled.div`
  box-sizing: border-box;

  h3 {
    font-size: 1.5rem;
    font-weight: bolder;
    margin-bottom: 2rem;
  }
`;

const StyledInput = styled.input`
  font-size: 1.2rem;
  border: none;
  border-bottom: 1px solid #868e96;
  outline: none;
  width: 100%;
  box-sizing: border-box;
  padding-bottom: 0.5rem;

  & + & {
    margin-top: 1.3rem;
  }
`;

const StlyedButton = styled.button`
  width: 100%;
  border: none;
  border-radius: 4px;
  font-weight: bolder;
  padding: 1rem 2rem;
  outline: none;
  cursor: pointer;
  margin-top: 1.3rem;
  background-color: ${palette.main};
  color: #fff;
`;


function AdminSignUpComponet({onClickSubmit, adminInfo, onChangeInput}) {
    const {adminId, email, password, passwordConfirm } = adminInfo

    return (
        <>
          <AuthTemplate>
            <SignUpFormBlcok>
              <h3>회원가입</h3>
              <StyledInput
                name="adminId"
                value={adminId}
                placeholder="아이디를 입력하세요"
                onChange={onChangeInput}
              />
              <StyledInput
                name="email"
                value={email}
                placeholder="이메일을 입력하세요"
                onChange={onChangeInput}
              />
              <StyledInput
                type="password"
                name="password"
                value={password}
                placeholder="비밀번호을 입력하세요"
                onChange={onChangeInput}
              />
              <StyledInput
                type="password"
                name="passwordConfirm"
                value={passwordConfirm}
                placeholder="비밀번호확인 입력하세요"
                onChange={onChangeInput}
              />
              <StlyedButton type="submit" onClick={onClickSubmit}>
                회원가입
              </StlyedButton>
            </SignUpFormBlcok>
          </AuthTemplate>
        </>
    )
}

export default AdminSignUpComponet
