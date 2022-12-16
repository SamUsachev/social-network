import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: ' https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'f2f6f44e-aeb1-4989-94e4-e6adde4d5f67',
  },
});

export const usersAPI = {
  getUsers: (currentPage, pageSize) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`);
  },

  follow(userId) {
    return axios.post(
      `https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
      {},
      {
        withCredentials: true,
        headers: {
          'API-KEY': 'f2f6f44e-aeb1-4989-94e4-e6adde4d5f67',
        },
      }
    );
  },
  unfollow(userId) {
    return axios.delete(
      `https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
      {
        withCredentials: true,
        headers: {
          'API-KEY': 'f2f6f44e-aeb1-4989-94e4-e6adde4d5f67',
        },
      }
    );
  },
  getProfile(userId) {
    return axios.get(
      `https://social-network.samuraijs.com/api/1.0/profile/${userId}`
    );
  },
};

export const profileAPI = {
  getProfile(userId) {
    return axios.get(
      `https://social-network.samuraijs.com/api/1.0/profile/${userId}`
    );
  },
  getStatus(userId) {
    return instance.get('profile/status/' + userId);
  },
  updateStatus(status) {
    return instance.put('profile/status', { status: status }); //properties, сервак документация
  },
};

export const authAPI = {
  me() {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials: true,
    });
  },
};
