import { SimplifiedAlbum } from "./album";
import { Artist } from "./artist";
import { ExternalUrls, Restrictions } from "./commonType";

export interface Track {
    album?: SimplifiedAlbum;
    artists?: Artist[];
    available_markets?: string[];
    disc_number?: number;
    duration_ms?: number;
    explicit?: boolean;
    external_ids?: ExternalIds;
    external_urls?: ExternalUrls;
    href?: string;
    id?: string;
    is_playable?: boolean;
    linked_from?: {
        id: string;
        uri: string;
    } | null;
    restrictions?: Restrictions;
    name?: string;
    popularity?: number;
    // preview_url?: string | null;
    track_number?: number;
    type?: "track";
    uri?: string;
    is_local?: boolean;
}

export interface ExternalIds {
    isrc?: string;
    ean?: string;
    upc?: string;
}