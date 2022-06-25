import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { BsGoogle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Error from "../../Utilities/Error/Error";
import Loading from "../../Utilities/Loading/Loading";
const SocialSignIn = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  if (loading) {
    <Loading />;
  }
  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user, navigate]);
  let err;
  if (error) {
    err = <Error error={error} />;
  }
  return (
    <>
      {err}
      <Button
        variant="secondary"
        className="w-100 my-4"
        onClick={() => signInWithGoogle()}
      >
        <BsGoogle className="me-2" />
        Google
      </Button>
    </>
  );
};

export default SocialSignIn;
