import React, { useState } from "react";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Profile from "../routes/Profile";
import Navigation from "components/Navigation";

const AppRouter = ({ isLoggedIn }) => {
    // React의 Hook
    // 함수 컴포넌트가 어떤 값을 유지할 수 있도록 캐시를 만들었는데
    // 이 캐시를 이용하고자 만든 여러개의 API를 리액트 훅 함수라고 함
    // useState, useEffect, useContext ... 등등
    return ( // 아래에 &&은 Navigation이 존재하려면 이것이 true여야한다는 뜻
        <Router> 
            {isLoggedIn && <Navigation />}
            <Switch>
                {isLoggedIn ? (
                    <>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/profile">
                            <Profile />
                        </Route>
                        <Redirect from="*" to="/" />
                    </>
                ) : (
                    <>
                        <Route exact path="/">
                            <Auth />
                        </Route>
                        <Redirect from="*" to="/" />
                    </>
                )}
            </Switch>
        </Router>
    );
};

export default AppRouter;