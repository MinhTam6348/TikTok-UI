import * as request from '~/utils/request';

const SearchApi = async (q, type = 'less') => {
    try {
        const res = await request.get(`users/search`, {
            params: {
                q,
                type,
            },
        });
        return res.data;
    } catch (error) {
        return error(400);
    }
};

export default SearchApi;
