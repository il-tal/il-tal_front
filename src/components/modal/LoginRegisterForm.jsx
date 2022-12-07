import { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { signUpForm, loginForm } from "../../api/index";
import kakaoLogo from "../../asset/kakao_login.png";
import Logo from "../../asset/LoginLogo.png";
import { loginCheck } from "../../api/store";
import { useRecoilState } from "recoil";

const RegisterForm = ({ setIsLogin }) => {
  const [loginState, setLoginState] = useRecoilState(loginCheck);

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    watch,
    formState: { errors },
  } = useForm();
  // ({ mode: "onChange", resolver: yupResolver(formSchema) });
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
      setLoginState(true);
      setIsLogin(true);
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

  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_REST_KAKAO_API_KEY}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&response_type=code`;

  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <Container>
      <img src={Logo} alt="iltalLogo" />
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
          <Line />
          <SocialLoginBox>
            {/* <KakaoLoginBtn onClick={handleLogin}> */}
            <img onClick={handleLogin} alt="kakaoLogo" src={kakaoLogo} />
            {/* </KakaoLoginBtn> */}
          </SocialLoginBox>
        </Wrap>
      ) : (
        <Wrap>
          <form onSubmit={handleSubmit(submitLoginSignUp)}>
            <FormBox>
              <InputBox>
                <IdNickBox>
                  <CreateId
                    type="text"
                    placeholder="아이디"
                    {...register("username", {
                      required: true,
                      // minLength: {
                      //   value: 4,
                      //   message: "영문/숫자 포함 4-12자로 입력해주세요.",
                      // },
                      pattern: {
                        value: /^(?=.*[a-zA-Z])(?=.*\d)[-a-zA-Z0-9]{4,12}$/,
                        message: "영문/숫자 포함 4-12자로 입력해주세요.",
                      },
                    })}
                  />
                  <DuplicationIdCheckBtn>중복확인</DuplicationIdCheckBtn>
                </IdNickBox>
                {errors?.username && <p>{errors.username.message}</p>}
                <InputPW
                  type="password"
                  placeholder="비밀번호"
                  {...register("password1", {
                    required: true,
                    // minLength: {
                    //   value: 8,
                    //   message: "영문/숫자/특수문자포함 8-16자로 입력해주세요.",
                    // },
                    pattern: {
                      value:
                        /^.*(?=^.{8,16}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/,
                      message: "영문/숫자/특수문자포함 8-16자로 입력해주세요.",
                    },
                  })}
                />
                {errors?.password1 && <p>{errors.password1.message}</p>}
                <InputPW
                  type="password"
                  placeholder="비밀번호확인"
                  {...register("password2", {
                    required: true,
                    validate: {
                      areSame: (value) =>
                        value === getValues("password1")
                          ? true
                          : "비밀번호가 일치하지 않습니다.",
                    },
                  })}
                />
                {errors?.password2 && <p>{errors.password2.message}</p>}
                <IdNickBox>
                  <CreateNickname
                    type="text"
                    placeholder="닉네임"
                    {...register("nickname", {
                      required: true,
                      pattern: {
                        value: /^[가-힣a-zA-Z0-9]{2,10}$/,
                        message:
                          "한글/영문/숫자를 사용하여 2~10자로 작성해주세요.",
                      },
                    })}
                  />
                  <DuplicationIdCheckBtn>중복확인</DuplicationIdCheckBtn>
                </IdNickBox>
                {errors?.nickname && <p>{errors.nickname.message}</p>}
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const Wrap = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// const LogoBox = styled.div`
//   height: 59px;
//   width: 157px;
//   margin: 50px 0 30px 0;
//   background-image: url(/src/asset/OurLogo.png);
// `;

///////////////////////////////////////////
//로그인 css

const LoginFormBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  width: 300px;
`;

const Input = styled.input`
  box-sizing: border-box;
  height: 50px;
  width: 299px;
  background-color: #d9d9d9;
  border-radius: 5px;
  border: none;
`;

const LoginBtn = styled.button`
  box-sizing: border-box;
  height: 50px;
  width: 299px;
  margin-top: 15px;
  background-color: #575757;
  border-radius: 5px;
  border: none;
`;

const BottomBox = styled.div`
  height: 25px;
  margin: 10px auto;
`;

const GoToRegisterBtn = styled.button`
  background-color: white;
  border: none;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
`;

const Line = styled.hr`
  margin-bottom: 15px;
  width: 300px;
  color: #d9d9d9;
`;

const SocialLoginBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 70px;
  width: 300px;
`;

const KakaoLoginBtn = styled.button`
  box-sizing: border-box;
  height: 50px;
  width: 299px;
  margin-top: 15px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;

const GoogleLoginBtn = styled.button`
  box-sizing: border-box;
  height: 50px;
  width: 299px;
  margin-top: 15px;
  background-color: white;
  border-radius: 5px;
  color: #828282;
  cursor: pointer;
`;

///////////////////////////////////////////
//회원가입 css

const FormBox = styled.div`
  height: 400px;
  width: 300px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  font-size: 15px;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

const IdNickBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CreateId = styled.input`
  box-sizing: border-box;
  height: 50px;
  width: 197px;
  background-color: #d9d9d9;
  border-radius: 5px;
  border: none;
`;

const DuplicationIdCheckBtn = styled.button`
  box-sizing: border-box;
  height: 50px;
  width: 82px;
  background-color: #d9d9d9;
  border-radius: 5px;
  border: 1px solid #7986cb;
  font-family: sans-serif;
  &:hover {
    background: white;
    transition: 0.3s;
  }
  cursor: pointer;
`;

const InputPW = styled.input`
  box-sizing: border-box;
  height: 50px;
  width: 299px;
  background-color: #d9d9d9;
  border-radius: 5px;
  border: none;
`;

const CreateNickname = styled.input`
  box-sizing: border-box;
  height: 50px;
  width: 197px;
  background-color: #d9d9d9;
  border-radius: 5px;
  border: none;
`;

const RegisterBtn = styled.button`
  box-sizing: border-box;
  height: 50px;
  width: 299px;
  margin-top: 15px;
  background-color: #575757;
  border-radius: 5px;
  border: 1px solid #575757;
  &:hover {
    background: white;
    transition: 0.3s;
  }
  cursor: pointer;
`;

const GoToLoginBtn = styled.button`
  background-color: white;
  border: none;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
`;
