import { useState } from "react";
import styled from "styled-components";
import H1Title from "../../components/aux/h1";
import PWithNav from "../../components/aux/pWithNav";
import Header from "../../components/Dashboard/Header";
import DefaultButton from "../../components/DefaultButton";

export default function Login() {
  const baseForm = { email: "", password: "" };

  const [form, setForm] = useState(baseForm);

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const submitForm = (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <Wrapper>
      <Header auth={true} marginbottom="5rem" />
      <div className="body">
        <div className="high">
          <H1Title marginbottom={"2rem"}>Welcome back!</H1Title>
        </div>
        <div className="middle">
          <Form onSubmit={submitForm}>
            <input onChange={handleForm} placeholder="email" name="email" />
            <input
              onChange={handleForm}
              placeholder="password"
              name="password"
            />

            <DefaultButton>Login</DefaultButton>
          </Form>
        </div>
        <div className="low">
          <PWithNav label="Register" path={"/auth/signin"}>
            don't have an account?
          </PWithNav>
        </div>
      </div>
    </Wrapper>
  );
}
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 20vh;
  input {
    height: 2.5rem;
    border-radius: 10px;
    border: none;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.25);
    font-family: "Lexend Deca", sans-serif;
    margin-bottom: 10px;
    padding-left: 1rem;
  }
`;
const Wrapper = styled.div`
  margin: 1rem;
  .div {
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .high {
    width: 50vw;
  }
  .body {
    min-height: 80vh;
  }
  .low {
    margin-top: 1rem;
  }
`;
