import { useQuery } from "@tanstack/react-query"

const useGetCurrentUserProfile = () => {
    return useQuery({
        queryKey: ['current-user-profile'],
        queryFn: useGetCurrentUserProfile,
    })
}