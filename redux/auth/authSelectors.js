export const selectStateChange = (state) => Boolean(state.auth.stateChange);
export const selectUserId = (state) => state.auth.userId;
export const selectName = (state) => state.auth.name;
export const selectPhoto = (state) => state.auth.photo;
