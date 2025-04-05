import { GetCurrentUserPlaylistRequest, GetCurrentUserPlaylistResponse, GetPlaylistRequest, Playlist } from "../models/playlist"
import api from "../utils/api"

export const getCurrentUserPlaylists = async ({ limit, offset }: GetCurrentUserPlaylistRequest): Promise<GetCurrentUserPlaylistResponse> => {
    try {
        const response = await api.get(`/me/playlists`, {
            params: { limit, offset }
        })
        return response.data

    } catch (error) {
        const err = error as Error
        throw new Error(`fail to fetch current user playlists, ${err.message}`)
    }
}

export const getPlaylist = async (params: GetPlaylistRequest): Promise<Playlist> => {
    try {
        const response = await api.get(`/playlists/${params.playlist_id}`, {
            params,
        })
        return response.data
    } catch (error) {
        const err = error as Error
        throw new Error(`fail to fetch playlist detail, ${err.message}`)
    }
}