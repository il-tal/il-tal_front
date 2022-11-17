import { useState, useEffect } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { mutate } = useMutation();

  const Client_ID = "7555650f225a920f06012d44affc4f03";
  const Redirect_URI = "http://localhost:3001/oauth/kakao/callback";

  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${Client_ID}&redirect_uri=${Redirect_URI}&response_type=code`;
  return (
    <Container>
      <LogoBox>로고</LogoBox>
      <form>
        <FormBox>
          <InputBox>
            <Input placeholder="아이디" />
            <Input placeholder="비밀번호" />
          </InputBox>
          <BtnLogin>로그인</BtnLogin>
        </FormBox>
      </form>
      <BottomBox>
        계정이 없으신가요? <BtnRegister> 회원가입 </BtnRegister>
      </BottomBox>
      <hr />
      <SocialLoginBox>
        <BtnKaKaoLogin>카카오톡으로 로그인</BtnKaKaoLogin>
        <BtnGoogleLogin>구글로 로그인</BtnGoogleLogin>
      </SocialLoginBox>
    </Container>
  );
};
export default LoginForm;

const Container = styled.div`
  height: 500px;
  width: 400px;
`;

const LogoBox = styled.div``;

const FormBox = styled.div``;

const InputBox = styled.div``;

const Input = styled.div``;

const BtnLogin = styled.button``;

const BottomBox = styled.div``;

const BtnRegister = styled.button``;

const SocialLoginBox = styled.div``;

const BtnKaKaoLogin = styled.button`
  /* background-image: url("/src/images/kakao_login_medium_wide.png");
  background-repeat: no-repeat;
  background-size: cover; */
  margin: 10px auto;
  padding: -10px;
  width: 300px;
  height: 45px;
`;

const BtnGoogleLogin = styled.button``;
