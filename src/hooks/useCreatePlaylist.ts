import { useMutation, useQueryClient } from "@tanstack/react-query";
import useGetCurrentUserProfile from "./useGetCurrentUserProfile";
import { createPlaylist } from "../apis/playlistApi";
import { CreatePlaylistRequest } from "../models/playlist";

const useCreatePlaylist = () => {
    const queryClient = useQueryClient();
    const { data: user } = useGetCurrentUserProfile();

    return useMutation({
        mutationFn: async (params: CreatePlaylistRequest) => {
            if (!user?.id) {
                throw new Error("User ID is missing");
            }
            return await createPlaylist(user.id, params);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["current-user-playlists"] });
            console.log("success!");
        },
    });
};

export default useCreatePlaylist;
