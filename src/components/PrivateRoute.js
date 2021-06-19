import { Route,Redirect} from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("token");
  return (
    <Route
      {...rest}
      render={(props) =>
        token != undefined ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/" }} />
        )
      }
    />
  );
};

export default PrivateRoute;
