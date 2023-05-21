const API_URL = 'https://panorbit.in/api/users.json';

const api = {
  getUsers: async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log("getUsers",data);
    return data.users;
  },
  getUser: async (userId) => {
    const response = await fetch(API_URL);
    const data = await response.json();
    const user = data.users.find((user) => user.id === parseInt(userId));
    console.log("getUsers userId",data,user);
    return user;
  },
};

export default api;