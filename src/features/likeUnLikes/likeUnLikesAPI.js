import axios from "../../utils/axios";

export const updateLikeUnLike = async (data) => {
    const response = await axios.patch(`/videos/${data.id}`, data);

    return response.data;
};
