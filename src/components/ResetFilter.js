import { useDispatch, useSelector } from "react-redux";
import { resetFilter } from "../features/filter/filterSlice";

export default function ResetFilter() {
    const { tags, search, author } = useSelector((state) => state.filter);
    const dispatch = useDispatch();
    
    const onResetHandeler = () => dispatch(resetFilter());

    if(tags.length === 0 && !search && !author)
        return null;

    return (
        <div className="absolute right-0">
            <button 
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                onClick={onResetHandeler}
            >
                Reset Filter
            </button>
        </div>
    )
}