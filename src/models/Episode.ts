import { Copyright, ExternalUrls, Restrictions, ResumePoint, Image } from "./commonType";

export interface Episode {
    // audio_preview_url: string | null;
    description: string;
    html_description: string;
    duration_ms: number;
    explicit: boolean;
    external_urls: ExternalUrls;
    href: string;
    id: string;
    images: Image[];
    is_externally_hosted: boolean;
    is_playable: boolean;
    // language?: string;
    languages: string[];
    name: string;
    release_date: string;
    release_date_precision: ReleaseDatePrecision;
    resume_point?: ResumePoint;
    type: "episode";
    uri: string;
    restrictions?: Restrictions;
    show: Show;
}

type ReleaseDatePrecision = "year" | "month" | "day";

export interface Show {
    available_markets: string[];
    copyrights: Copyright[];
    description: string;
    html_description: string;
    explicit: boolean;
    external_urls: ExternalUrls;
    href: string;
    id: string;
    images: Image[];
    is_externally_hosted: boolean;
    languages: string[];
    media_type: string;
    name: string;
    publisher: string;
    type: "show";
    uri: string;
    total_episodes: number;
}

export type SimplifiedEpisode = Omit<Episode, "show">