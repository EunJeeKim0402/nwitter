import { authService, dbService } from "fbase";
import { useHistory } from "react-router-dom"; 
import React, { useEffect } from "react";

export default ({ userObj }) => {
    const history = useHistory();
    const onLogOutClick = () => {
        authService.signOut();
        history.push("/");
    };
    const getMyNweets = async() => {
        const nweets = await dbService
            .collection("nweets")
            .where("creatorId", "==", userObj.uid)
            .orderBy("createdAt")
            .get();
        console.log(nweets.docs.map(doc => doc.data()))
    };
    useEffect(() => {
        getMyNweets();
    }, [])
    return (
        <div>
            <button onClick={onLogOutClick}>Log Out</button>
        </div>
    );
};

/*
import { authService, dbService } from "fbase";
import { useHistory } from "react-router-dom"; 
import React, { useEffect } from "react";

export default ({ userObj }) => {
    const history = useHistory();
    const onLogOutClick = () => {
        authService.signOut();
        history.push("/");
    };
    const getMyNweets = async() => {
        const nweets = await dbService
            .collection("nweets")
            .where("creatorId", "==", userObj.uid)
            .orderBy("createdAt")
            .get();
        console.log(nweets.docs.map(doc => doc.data()))
    };
    useEffect(() => {
        getMyNweets();
    }, [])
    return (
        <div>
            <button onClick={onLogOutClick}>Log Out</button>
        </div>
    );
};
*/