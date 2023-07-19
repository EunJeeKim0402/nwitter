import { dbService } from "fbase";
import React, { useEffect, useState } from "react";

const Home = () => {
    const [nweet, setNweet] = useState("");
    const [nweets, setNweets] = useState([]);

    const getNweets = async () => {
        const dbNweets = await dbService.collection("nweets").get();
        const nweetArray = dbNweets.docs.map((document) => ({ ...document.data(), id: document.id }));
        setNweets(nweetArray);
    };

    useEffect(() => {
        getNweets();
    }, []);

    const onSubmit = async (event) => {
        event.preventDefault();
        await dbService.collection("nweets").add({
            nweet,
            createdAt: Date.now(),
        });
        setNweet("");
    };

    const onChange = (event) => {
        const { value } = event.target;
        setNweet(value);
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={nweet} onChange={onChange} type="text" placeholder="What's on your mind?" maxLength={120} />
                <input type="submit" value="Nweet" />
            </form>
            <div>
                {nweets.map((nweet) => (
                    <div key={nweet.id}>
                        <h4>{nweet.nweet}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
