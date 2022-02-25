import { Route } from "react-router-dom";

const Welcome = () => {
  return (
    <div>
      <h2>The Welcome Page</h2>
      <Route path="/welcome/user">
        <p>Hello</p>
      </Route>
    </div>
  );
};

export default Welcome;
