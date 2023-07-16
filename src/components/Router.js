import React, { useState } from "react";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

const AppRouter = ({ isLoggedIn }) => {
    // React의 Hook
    // 함수 컴포넌트가 어떤 값을 유지할 수 있도록 캐시를 만들었는데
    // 이 캐시를 이용하고자 만든 여러개의 API를 리액트 훅 함수라고 함
    // useState, useEffect, useContext ... 등등
    return (
        <Router>
            <Switch>
                {isLoggedIn ? (
                    <>
                        <Route exact path="/">
                            <Home />
                        </Route>
                    </>
                ) : (
                    <Route exact path="/">
                        <Auth />
                    </Route>
                )}
            </Switch>
        </Router>
    );
};

export default AppRouter;