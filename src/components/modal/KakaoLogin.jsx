import { useState } from "react";
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
  return <Container></Container>;
};
export default LoginForm;

const Container = styled.div`
  height: 500px;
  width: 400px;
`;

//   background-image: url("/src/images/kakao_login_medium_wide.png");
//   background-repeat: no-repeat;
//   background-size: cover;
//   margin: 10px auto;
//   padding: -10px;
//   width: 300px;
//   height: 45px;
// `;
