import { useSelector, useDispatch } from "react-redux";
import { login, register } from "../../store/user/userSlice";

function User() {
  const username = useSelector((state) => state.user.username);
  const dispatch = useDispatch();

  return (
    <>
      <h1>You need to login first</h1>
      <button onClick={() => dispatch(login("Abdo Elbrins"))}>Login</button>
    </>
  );
}

export default User;
