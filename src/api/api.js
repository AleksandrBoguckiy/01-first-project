import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {"API-KEY": '97576cab-73c5-46e1-a60e-d028ac72e336'}
});

export const usersAPI = {

    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data
            )
    }
};

export const followAPI = {

    unFollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data
            )
    },

    follow(id) {
        return instance.post(`follow/${id}`)
            .then(response => response.data
            )
    }
};

export const profileAPI = {

    getProfile(userId) {
        return instance.get(`profile/` + userId)
            .then(response => response.data
            )
    }
};

export const authAPI = {

    me() {
        return instance.get(`auth/me`)
            .then(response => response.data
            )
    }
}