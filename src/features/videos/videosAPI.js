import axios from "../../utils/axios";

export const getVideos = async (tags, search, author, page, limit) => {
    let queryString = "";

    if (tags?.length > 0) {
        queryString += tags.map((tag) => `tags_like=${tag}`).join("&");
    }

    if (search !== "") {
        queryString += `&q=${search}`;
    }

    if (author !== "") {
        queryString += `&author=${author}`;
    }

    if(page) queryString += `&_page=${page}`;
    if(limit) queryString += `&_limit=${limit}`;

    const response = await axios.get(`/videos?${queryString}`);

    let totalPage = 0;
    if(response.headers.link) {
        const pageLinks = response.headers.link.split(',');
        const lastPageUrl = pageLinks[pageLinks.length - 1].split("&");
        const page = lastPageUrl[lastPageUrl.length - 2].split("=");
        // console.log("page", +page[1])
        totalPage = +page[1];
    }
    // console.log("response", response.headers.link ? response.headers.link.split(',')[2].split("&") : response.headers)
    // console.log("response", response.headers.link ? response.headers.link.split(',')[2].split("&")[1].split("=") : response.headers)

    return {videos: response.data, totalPage};
};
