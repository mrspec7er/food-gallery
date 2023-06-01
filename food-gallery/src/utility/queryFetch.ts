import mutationFetch from "./mutationFetch";

const queryFetch = async (url: string) => {
  const access_token = localStorage.getItem("accessToken");
  const tokenExpiredCode = 403;

  return await fetch(`${url}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token}`,
    },
  }).then((res) => {
    if (res.status === tokenExpiredCode) {
      const refresh_token = localStorage.getItem("refreshToken");
      mutationFetch("/refresh", { refreshToken: refresh_token }, "POST")
        .then((res) => {
          if (!res.ok) {
            console.log("Token Expired");
            return (window.location.href = "/login");
          }
          return res.json();
        })
        .then((result) => {
          localStorage.setItem("accessToken", result.data.accessToken);
          queryFetch(url);
        });
    }
    if (!res.ok) {
      throw new Error("Request Failed");
    }

    return res.json();
  });
};

export default queryFetch;
