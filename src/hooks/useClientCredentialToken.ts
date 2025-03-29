import { useQuery } from "@tanstack/react-query"
import { getClientCredentialToken } from "../apis/getClientCredentialToken"

const useClientCredentialToken = (): string | undefined => {
    const { data } = useQuery({
        queryKey: ['client-credential=token'],
        queryFn: getClientCredentialToken
    })
    console.log("3. useClientCredentialToken안이야. token받아오니? -> ", data)
    const clientCredentialToken = data?.access_token
    console.log("clientCredentialToken????===> ", clientCredentialToken)
    return clientCredentialToken
}

export default useClientCredentialToken