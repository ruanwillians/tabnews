import { useNavigate } from "react-router-dom";
import Button from "../../components/atoms/button/button";
import FlexView from "../../components/atoms/flexView/flexView";

function Login() {
  const navigate = useNavigate();

  const navigateToApp = () => {
    navigate("/app");
  };

  return (
    <>
      <FlexView column justifyContent={"center"} alignItems={"center"}>
        <p>login</p>
        <Button color="green" onClick={navigateToApp}>
          Ir para app
        </Button>
      </FlexView>
    </>
  );
}

export default Login;
