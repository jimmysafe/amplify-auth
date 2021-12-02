import Amplify, { Auth } from "aws-amplify";
import config from "./aws-exports";
import "./App.css";

Amplify.configure(config);

const email = "ciaffardini.g+52@gmail.com";
const password = "asdasdasd";
const code = "902987";

const App = () => {
  const signup = async () => {
    try {
      const res = await Auth.signUp(email, password);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const verify = async () => {
    try {
      const res = await Auth.confirmSignUp(email, code);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const login = async () => {
    try {
      const res = await Auth.signIn(email, password);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <button onClick={signup}>signup</button>
      <button onClick={verify}>verify</button>
      <button onClick={login}>login</button>
    </div>
  );
};

export default App;
