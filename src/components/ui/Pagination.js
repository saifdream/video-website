import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../features/filter/filterSlice";

export default function Pagination() {
    const { totalPage } = useSelector((state) => state.videos);
    const { currentPage } = useSelector((state) => state.filter);
    const dispatch = useDispatch();

    const onPageClickHandeler = (page) => dispatch(setCurrentPage(page));

    if(totalPage === 0) return null;

    return (
        <section className="pt-12">
            <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end">
                {
                    Array(totalPage).fill(1).map((item, index) => (
                        <div 
                            key={index}
                            className={`${currentPage === index +1 ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-600"} px-4 py-1 rounded-full cursor-pointer`} 
                            onClick={()=> onPageClickHandeler(index + 1)}
                        >
                            { index + 1 }
                        </div>
                    ))
                }
            </div>
        </section>
    );
}
