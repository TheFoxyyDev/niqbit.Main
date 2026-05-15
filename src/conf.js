// PERMANENT CONFIGURATION
export const BACKEND_URL = window.location.hostname === "localhost"
    ? "http://localhost:3000"
    : "https://api.niqbit.com";

// TEMPORARY VARIABLES
export let access_token = ""
export function setAccessToken(accessToken) {
    access_token = accessToken;
}
export async function getAccessToken() {
    console.log("req at")
    if (access_token == null || access_token === "") {
        const resp = await fetch(`${BACKEND_URL}/auth/refresh`, {
            method: "POST",
            credentials: "include",
            headers: { "Content-type": "application/json" }
        })

        const body = await resp.json()
        const newAccessToken = body.accessToken
        console.log(newAccessToken)
        setAccessToken(newAccessToken);
        return newAccessToken
    } else {
        return access_token
    }
}