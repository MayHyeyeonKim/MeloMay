import { useQueryClient } from "@tanstack/react-query"

const useLogout = () => {

    const queryClient = useQueryClient();

    return () => {
        localStorage.removeItem("access_token")
        sessionStorage.removeItem("access_token")

        queryClient.clear()
        window.location.reload()
    }
}

export default useLogout