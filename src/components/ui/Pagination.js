import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage, setPageLimit } from "../../features/filter/filterSlice";

export default function Pagination() {
    const { totalPage } = useSelector((state) => state.videos);
    const { currentPage, limit } = useSelector((state) => state.filter);
    const dispatch = useDispatch();

    const onPageClickHandeler = (page) => dispatch(setCurrentPage(page));
    const onRowsPerPageHandeler = (limit) => dispatch(setPageLimit(limit));

    if(totalPage === 0) return null;

    return (
        <section className="pt-12">
            <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end">
            <label for="countries" class="block text-sm font-medium text-gray-900 mt-2">Rows Per Page: </label>
            <select 
                id="orwsPerPage" 
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                onChange={(e)=> onRowsPerPageHandeler(e.target.value)}
                value={limit}
            >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
            </select>
                {
                    Array(totalPage).fill(1).map((item, index) => (
                        <div 
                            key={index}
                            className={`${currentPage === index +1 ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-600"} px-4 py-2 rounded-full cursor-pointer`} 
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
