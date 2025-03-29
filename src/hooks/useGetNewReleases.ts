import { useQuery } from "@tanstack/react-query"
import { getNewReleases } from "../apis/albumApi";
import useClientCredentialToken from "./useClientCredentialToken";

const useGetNewReleases = () => {
    const clientCredentialToken = useClientCredentialToken()
    console.log("2. useGetNewReleases안이야! totken있냐?????", clientCredentialToken)
    return (
        useQuery({
            queryKey: ["new-releases"],
            queryFn: async () => {
                if (!clientCredentialToken) {
                    throw new Error("No token available")
                }
                return getNewReleases(clientCredentialToken);
            }
        })
    )
}

export default useGetNewReleases