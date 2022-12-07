import { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import {
  signUpForm,
  loginForm,
  dupUsername,
  dupNickname,
} from "../../api/index";
import kakaoLogo from "../../asset/kakaoLogo.png";
import { loginCheck } from "../../api/store";
import { useRecoilState } from "recoil";
import Logo from "../../asset/LoginLogo.png";
import Swal from "sweetalert2";

const RegisterForm = ({ setIsLogin }) => {
  const [loginState, setLoginState] = useRecoilState(loginCheck);

  const navigator = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    getValues,

    formState: { errors, isSubmitting },
  } = useForm({ mode: "onChange" });

  const { mutate: toSign } = useMutation(signUpForm, {
    onSuccess: () => {
      Swal.fire({
        icon: "success",
        title: "회원가입 완료",
        text: "일탈에 회원이 되신것을 환영합니다!",
      });
      setLogIn(true);
    },
    onError: ({ response }) => {
      Swal.fire({
        icon: "error",
        title: "회원가입 실패",
        text: response.data.error.detail,
      });
    },
  });

  const { mutate: duplicateId } = useMutation(dupUsername, {
    onSuccess: (res) => {
      Swal.fire({
        icon: "success",
        title: "ID 사용 가능",
        text: "사용 가능한 아이디 입니다!",
      });
    },
    onError: (err) => {
      if (err.response.status === 409) {
        Swal.fire({
          icon: "error",
          title: "중복된 아이디",
          text: "이미 사용된 아이디 입니다!",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "오류 발생",
          text: "오류가 발생하였습니다. 다시 시도하세요!",
        });
      }
    },
  });

  const { mutate: duplicateNick } = useMutation(dupNickname, {
    onSuccess: (res) => {
      Swal.fire({
        icon: "success",
        title: "닉네임 사용 가능",
        text: "사용 가능한 닉네임 입니다!",
      });
    },
    onError: (err) => {
      if (err.response.status === 409) {
        Swal.fire({
          icon: "error",
          title: "중복된 닉네임",
          text: "이미 사용된 닉네임 입니다!",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "오류 발생",
          text: "오류가 발생하였습니다. 다시 시도하세요!",
        });
      }
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
      Swal.fire({
        icon: "error",
        title: "로그인 실패",
        text: "로그인에 실패하였습니다. 다시 시도해 주세요!",
      });
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

  const idCheck = () => {
    const { username } = getValues();
    duplicateId(username);
  };

  const nickCheck = () => {
    const { nickname } = getValues();
    duplicateNick(nickname);
  };

  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <Container>
      <LogoBox
        onClick={() => {
          navigator("/");
          setIsLogin(true);
        }}>
        <img src={Logo} alt="iltalLogo" />
      </LogoBox>
      {logIn ? (
        <Wrap>
          <form onSubmit={handleSubmit(submitLoginSignUp)}>
            <LoginFormBox>
              <Input {...register("username")} placeholder="  아이디" />
              <br />
              <Input
                type="password"
                {...register("password")}
                placeholder="  비밀번호"
              />
              <LoginBtn disabled={isSubmitting}>로그인</LoginBtn>
            </LoginFormBox>
          </form>
          <BottomBox>
            계정이 없으신가요?{" "}
            <GoToRegisterBtn onClick={toSignUp}> 회원가입 </GoToRegisterBtn>
          </BottomBox>
          <Line />
          <SocialLoginBox>
            <KakaoLoginBtn onClick={handleLogin}>
              <img className="kakaoLogo" src={kakaoLogo} alt="kakaologo" />
              카카오로 로그인
            </KakaoLoginBtn>
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
                    placeholder="  아이디"
                    {...register("username", {
                      required: true,

                      pattern: {
                        value: /^(?=.*[a-zA-Z])(?=.*\d)[-a-zA-Z0-9]{4,12}$/,
                        message: "영문/숫자 포함 4-12자로 입력해주세요.",
                      },
                    })}
                  />
                  <DuplicationIdCheckBtn type="button" onClick={idCheck}>
                    중복확인
                  </DuplicationIdCheckBtn>
                </IdNickBox>
                {errors?.username && <p>{errors.username.message}</p>}
                <InputPW
                  type="password"
                  placeholder="  비밀번호"
                  {...register("password1", {
                    required: true,

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
                  placeholder="  비밀번호확인"
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
                    placeholder="  닉네임"
                    {...register("nickname", {
                      required: true,
                      pattern: {
                        value: /^[가-힣a-zA-Z0-9]{2,10}$/,
                        message:
                          "한글/영문/숫자를 사용하여 2~10자로 작성해주세요.",
                      },
                    })}
                  />
                  <DuplicationIdCheckBtn type="button" onClick={nickCheck}>
                    중복확인
                  </DuplicationIdCheckBtn>
                </IdNickBox>
                {errors?.nickname && <p>{errors.nickname.message}</p>}
                {/* 아이디 영문숫자포함 4-12자, 닉네임 한글영어포함 2-10자, 비밀번호 영문 특수문자포함 8-16자*/}
              </InputBox>
              <RegisterBtn>회원가입</RegisterBtn>
            </FormBox>
          </form>
          <BottomBox2>
            이미 계정이 있으신가요?{" "}
            <GoToLoginBtn onClick={toLogin}> 로그인 </GoToLoginBtn>
          </BottomBox2>
        </Wrap>
      )}
    </Container>
  );
};
export default RegisterForm;

//공통으로 적용되는 레이아웃
const Container = styled.div`
  height: 646px;
  width: 512px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const LogoBox = styled.div`
  height: 140px;
  width: 140px;
  cursor: pointer;
`;

const Wrap = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

//로그인 css

const LoginFormBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 246px;
  width: 393px;
  justify-content: center;
`;

const Input = styled.input`
  box-sizing: border-box;
  height: 66px;
  width: 393px;
  background-color: #eeeeee;
  border-radius: 8px;
  border: none;
  margin-top: 8px;
  font-size: 18px;
`;

const LoginBtn = styled.button`
  box-sizing: border-box;
  height: 66px;
  width: 393px;
  background-color: #06c387;
  border-radius: 8px;
  border: none;
  color: white;
  margin-top: 21px;
  font-size: 17px;
  font-weight: bold;
  cursor: pointer;
`;

const BottomBox = styled.div`
  margin: 25px 0 15px 0;
  color: #828282;
`;

const GoToRegisterBtn = styled.button`
  background-color: white;
  border: none;
  font-weight: bold;
  font-size: 16px;
  color: #828282;
  cursor: pointer;
`;

const Line = styled.hr`
  margin-bottom: 20px;
  width: 393px;
  color: #cccccc;
`;

const SocialLoginBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 80px;
  width: 393px;
`;

const KakaoLoginBtn = styled.button`
  box-sizing: border-box;
  height: 66px;
  width: 393px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background-color: #fee500;
  position: relative;
  font-size: 17px;
  color: #423630;
  .kakaoLogo {
    position: absolute;
    left: 112px;
    top: 24px;
    width: 22px;
    height: 19px;
  }
`;

///////////////////////////////////////////
//회원가입 css

const FormBox = styled.div`
  height: 470px;
  width: 393px;
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 18px;
  font-size: 15px;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 18px;
`;

const IdNickBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CreateId = styled.input`
  box-sizing: border-box;
  height: 50px;
  width: 246px;
  background-color: #eeeeee;
  border-radius: 8px;
  border: none;
  font-size: 17px;
`;

const DuplicationIdCheckBtn = styled.button`
  box-sizing: border-box;
  height: 50px;
  width: 123px;
  background-color: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 8px;
  font-size: 17px;
  &:hover {
    background: white;
    transition: 0.3s;
  }
  cursor: pointer;
`;

const InputPW = styled.input`
  box-sizing: border-box;
  height: 50px;
  width: 393px;
  background-color: #eeeeee;
  border-radius: 8px;
  border: none;
  font-size: 17px;
`;

const CreateNickname = styled.input`
  box-sizing: border-box;
  height: 50px;
  width: 246px;
  background-color: #eeeeee;
  border-radius: 8px;
  border: none;
  font-size: 17px;
`;

const RegisterBtn = styled.button`
  box-sizing: border-box;
  height: 50px;
  width: 393px;
  border-radius: 8px;
  border: none;
  background-color: #06c387;
  color: white;
  font-size: 17px;
  font-weight: bold;
  cursor: pointer;
`;

const BottomBox2 = styled.div`
  color: #828282;
`;

const GoToLoginBtn = styled.button`
  background-color: white;
  border: none;
  font-weight: bold;
  font-size: 16px;
  color: #8a8a8a;
  cursor: pointer;
`;
