import axios from "axios"
import { CLIENT_ID, CLIENT_SECRET } from "../configs/authConfig"
import { ClientCredentialTokenResponse, ExchangeTokenResponse } from "../models/auth"
import { SPOTIFY_REDIRECT_URI } from "../configs/commonConfig";

const encodedBase64 = (data: string): string => {
    if (typeof window !== "undefined") {
        return btoa(data);
    } else {
        return Buffer.from(data).toString("base64")
    }
}

export const getClientCredentialToken = async (): Promise<ClientCredentialTokenResponse> => {
    try {
        const body = new URLSearchParams({
            grant_type: "client_credentials"
        })
        const response = await axios.post("https://accounts.spotify.com/api/token", body, {
            headers: {
                Authorization: `Basic ${encodedBase64(CLIENT_ID + ":" + CLIENT_SECRET)}`,
                "Content-Type": "application/x-www-form-urlencoded"
            }
        });
        return response.data
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error("error: ", error.response?.data)
        } else {
            console.error("unknown error: ", error)
        }
        throw new Error("Fail to fetch token")
    }
}

export const exchangeToken = async (code: string, codeVerifier: string): Promise<ExchangeTokenResponse> => {
    try {
        const url = "https://accounts.spotify.com/api/token";
        if (!CLIENT_ID && !SPOTIFY_REDIRECT_URI) {
            throw new Error("missing required parameters");
        }
        const body = new URLSearchParams({
            client_id: CLIENT_ID,
            grant_type: "authorization_code",
            code,
            redirect_uri: SPOTIFY_REDIRECT_URI,
            code_verifier: codeVerifier,
        })
        const response = await axios.post(url, body, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        })
        return response.data
    } catch (error) {
        throw Error("fail to fetch token")
    }
}