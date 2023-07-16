import React, { useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";

function App() {
  //const auth = fbase.auth();
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  // 로그인상태가 false면 Auth, true면 Home이 보여짐
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>&copy; {new Date().getFullYear()} Nwitter </footer>
    </>
  );
}

export default App;
