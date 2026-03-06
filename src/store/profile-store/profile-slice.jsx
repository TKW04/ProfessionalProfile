import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profiles: [],
  profile: {
    profile_id: 0,
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    about_me: "",
    social_links: [],
    skills: [],
    projects: [],
    experiences: [],
    education: [],
    saved_palette: [],
    profile_picture_info: "",
    is_active: true,
    title: "",
    creation_date: "",
    creation_user: "",
    update_date: "",
    update_user: "",
    image: null,
  },
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    restartState(state) {
      state.profile = {};
      state.profiles = [];
    },
    startProfile(state) {
      state.profile = {
        profile_id: 0,
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        about_me: "",
        social_links: [],
        skills: [],
        projects: [],
        experiences: [],
        education: [],
        profile_picture_info: "",
        is_active: true,
        creation_date: "",
        creation_user: "",
        update_date: "",
        update_user: "",
      };
    },
    setprofiles(state, actions) {
      state.profiles = actions.payload.profiles;
    },
    setprofile(state, actions) {
      state.profile = actions.payload.profile;
    },
    modifyPropertyValue(state, actions) {
      state.profile[actions.payload.id] = actions.payload.value;
    },
  },
});

export const profileActions = profileSlice.actions;
export default profileSlice;
