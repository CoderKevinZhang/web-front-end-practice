export const selectUser = (user) => {
    console.log(`User Name: ${user.first} has been selected`);
    return{
        type: 'USER_SELECTED',
        payload: user
    }
};