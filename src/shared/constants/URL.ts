const URL = {
  PAGE: {
    HOME: "/",
    DETAIL: "/detail",
    DASHBOARD: "/dashboard",
    OVERVIEW: "/overview",
    USERINFO: "/userinfo",
    TEST: "/test",
  },
  LOGIN: {
    KAKAO: `${import.meta.env.VITE_APP_API_URL}/oauth2/authorization/kakao`,
  },
};

export default URL;
