import { useMutation, useQueryClient } from "@tanstack/react-query"
import useGetCurrentUserProfile from "./useGetCurrentUserProfile"
import { createPlaylist } from "../apis/playlistApi"
import { CreatePlaylistRequest } from "../models/playlist"

const useCreatePlaylist = () => {
    const queryClient = useQueryClient()
    const { data: user } = useGetCurrentUserProfile()
    return useMutation({
        mutationFn: (params: CreatePlaylistRequest) => {
            if (user) {
                return createPlaylist(user?.id, params)
            }
            return Promise.reject(new Error("user is not defined"))
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["current-user-playlists"] })
            console.log("success!")
        }
    })

}

export default useCreatePlaylist