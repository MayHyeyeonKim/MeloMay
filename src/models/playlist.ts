import { ApiResponse } from "./apiResponse";
import { ExternalUrls, Followers, Image, Owner } from "./commonType";

export interface GetCurrentUserPlaylistRequest {
    limit?: number;
    offset?: number;
}

export type GetCurrentUserPlaylistResponse = ApiResponse<SimplifiedPlaylist>

export interface SimplifiedPlaylist {
    collaborative?: boolean;
    description?: string;
    external_urls: ExternalUrls;
    href?: string;
    id?: string;
    images?: Image[];
    name?: string;
    owner?: Owner;
    public?: boolean;
    snapshot_id?: string;
    tracks?: {
        href?: string;
        total?: number;
    }
    type?: string;
    uri?: string;
}


export interface GetPlaylistRequest {
    playlist_id: string;
    marke?: string;
    fields?: string;
    additional_types?: string;
}
