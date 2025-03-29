import axios from "axios"
import { clientId, clientSecret } from "../configs/authConfig"
import { ClientCredentialTokenResponse } from "../models/auth"

// const encodedBase64 = (data: string): string => {
//     if (typeof window !== "undefined") {
//         return btoa(data);
//     } else {
//         return Buffer.from(data).toString("base64");
//     }
// }

export const getClientCredentialToken = async (): Promise<ClientCredentialTokenResponse> => {
    try {
        const body = new URLSearchParams({
            grant_type: "client_credentials"
        })

        if (!clientId || !clientSecret) {
            throw new Error("Missing Spotify clientId or clientSecret");
        }

        const response = await axios.post("https://accounts.spotify.com/api/token", body, {
            headers: {
                'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64')),
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
        return response.data
    } catch (error: any) {
        console.error("에러 응답:", error.response?.data);
        throw new Error("Fail to fetch client credential token");
    }
}

export default getClientCredentialToken