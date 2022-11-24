import { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { signUpForm, loginForm } from "../../api/index";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const RegisterForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();
  const { mutate: toSign } = useMutation(signUpForm, {
    onSuccess: () => {
      alert("회원가입이 완료되었습니다.");
      setLogIn(true);
    },
    onError: () => {
      alert("회원가입에 실패했습니다. 다시 시도해주세요.");
    },
  });

  const { mutate: toLogIn } = useMutation(loginForm, {
    onSuccess: (res) => {
      sessionStorage.setItem("access_token", res.headers.access_token);
      sessionStorage.setItem("refresh_token", res.headers.refresh_token);
      sessionStorage.setItem("userinfo", JSON.stringify(res.data.data));
      console.log(res);
      navigate("/");
    },
    onError: (err) => {
      alert("로그인에 실패했습니다.");
    },
  });

  const [logIn, setLogIn] = useState(true);
  const toSignUp = () => {
    setValue("username", "");
    setValue("password", "");
    setValue("nickname", "");
    setLogIn(false);
  };

  const toLogin = () => {
    setValue("username", "");
    setValue("password", "");
    setLogIn(true);
  };

  const submitLoginSignUp = (data) => {
    if (logIn) {
      toLogIn({ username: data.username, password: data.password });
      setValue("username", "");
      setValue("password", "");
    } else {
      toSign({
        username: data.username,
        password: data.password1,
        passwordConfirm: data.password2,
        nickname: data.nickname,
      });
      setValue("username", "");
      setValue("password1", "");
      setValue("password2", "");
      setValue("nickname", "");
    }
  };

  return (
    <Container>
      <LogoBox />
      {logIn ? (
        <Wrap>
          <form onSubmit={handleSubmit(submitLoginSignUp)}>
            <LoginFormBox>
              <Input {...register("username")} placeholder=" 아이디" />
              <br />
              <Input
                type="password"
                {...register("password")}
                placeholder=" 비밀번호"
              />
              <LoginBtn>로그인</LoginBtn>
            </LoginFormBox>
          </form>
          <BottomBox>
            계정이 없으신가요?{" "}
            <GoToRegisterBtn onClick={toSignUp}> 회원가입 </GoToRegisterBtn>
          </BottomBox>
          <hr />
          <SocialLoginBox>
            <KaKaoLoginBtn>카카오톡으로 로그인</KaKaoLoginBtn>
            <GoogleLoginBtn>구글로 로그인</GoogleLoginBtn>
          </SocialLoginBox>
        </Wrap>
      ) : (
        <Wrap>
          <form onSubmit={handleSubmit(submitLoginSignUp)}>
            <FormBox>
              <InputBox>
                <IdBox>
                  <CreateId
                    type="text"
                    {...register("username", {
                      required: true,
                      pattern: {
                        value: /^(?=.*[a-zA-Z])[-a-zA-Z0-9]{4,12}$/,
                      },
                    })}
                    placeholder="아이디"
                  />
                  <DuplicationIdCheckBtn>중복확인</DuplicationIdCheckBtn>
                </IdBox>
                <InputPW
                  type="password"
                  {...register("password1", {
                    required: true,
                    pattern: {
                      value:
                        /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z!@#$%^&*]{8,16}$/,
                      message: "비밀번호를 양식에 맞게 작성해주세요.",
                    },
                  })}
                  placeholder="비밀번호"
                />
                {errors.password1 && <p>{errors.password1.message}</p>}
                <InputPW
                  type="password"
                  {...register("password2", {
                    required: true,
                    validate: {
                      areSame: (value) =>
                        value === getValues("password1")
                          ? true
                          : "비밀번호가 일치하지 않습니다.",
                    },
                  })}
                  placeholder="비밀번호확인"
                />
                <CreateNickname
                  type="text"
                  {...register("nickname", {
                    required: true,
                    pattern: {
                      value: /^[가-힣a-zA-Z]{2,10}$/,
                      message: "한글,영문 2~10자로 작성해주세요.",
                    },
                  })}
                  placeholder="닉네임"
                />
                {/* 아이디 영문숫자포함 4-12자, 닉네임 한글영어포함 2-10자, 비밀번호 영문 특수문자포함 8-16자*/}
              </InputBox>
              <RegisterBtn>회원가입</RegisterBtn>
            </FormBox>
          </form>
          <BottomBox>
            이미 계정이 있으신가요?{" "}
            <GoToLoginBtn onClick={toLogin}> 로그인 </GoToLoginBtn>
          </BottomBox>
        </Wrap>
      )}
    </Container>
  );
};
export default RegisterForm;

//공통으로 적용되는 레이아웃
const Container = styled.div`
  height: 632px;
  width: 467px;
`;

const Wrap = styled.div`
  height: 100%;
  width: 100%;
`;

const LogoBox = styled.div`
  height: 60px;
  width: 157px;
  border: 1px solid black;
`;

///////////////////////////////////////////
//로그인 css

const LoginFormBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 300px;
`;

// const LoginInputBox = styled.div`
// `

const Input = styled.input``;

const LoginBtn = styled.button``;

const BottomBox = styled.div``;

const GoToRegisterBtn = styled.button``;

const SocialLoginBox = styled.div``;

const KaKaoLoginBtn = styled.button``;

const GoogleLoginBtn = styled.button``;

///////////////////////////////////////////
//회원가입 css

const FormBox = styled.div``;

const InputBox = styled.div``;

const IdBox = styled.div``;

const CreateId = styled.input``;

const DuplicationIdCheckBtn = styled.button``;

const InputPW = styled.input``;

const CreateNickname = styled.input``;

const RegisterBtn = styled.button``;

const GoToLoginBtn = styled.button``;
