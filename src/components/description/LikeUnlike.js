import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import likeImage from "../../assets/like.svg";
import unlikeImage from "../../assets/unlike.svg";
import { patchVideo } from "../../features/likeUnLikes/likeUnLikesSlice";

export default function LikeUnlike({id, likes, unlikes}) {
    const dispatch = useDispatch();
    const [_likes, setLikes] = useState(likes);
    const [_unlikes, setUnLikes] = useState(unlikes);
    const onLikeClickHandeler = () => {
        dispatch(patchVideo({id, likes: _likes + 1}))
            .unwrap()
            .then((video)=> {
                if(video) setLikes(video.likes);
            });
    };
    const onUnLikeClickHandeler = () => {
        dispatch(patchVideo({id, unlikes: _unlikes + 1}))
            .unwrap()
            .then((video)=> {
                if(video) setUnLikes(video.unlikes);
            });
    };

    return (
        <div className="flex gap-10 w-48">
            <div className="flex gap-1 cursor-pointer" onClick={onLikeClickHandeler}>
                <div className="shrink-0 ">
                    <img className="w-5 block" src={likeImage} alt="Like" />
                </div>
                <div className="text-sm leading-[1.7142857] text-slate-600">
                    {_likes}
                </div>
            </div>
            <div className="flex gap-1 cursor-pointer" onClick={onUnLikeClickHandeler}>
                <div className="shrink-0">
                    <img className="w-5 block" src={unlikeImage} alt="Unlike" />
                </div>
                <div className="text-sm leading-[1.7142857] text-slate-600">
                    {_unlikes}
                </div>
            </div>
        </div>
    );
}
