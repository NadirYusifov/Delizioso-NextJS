import Layout from "@/components/layouts/layout";
import { AppProps } from "next/app";
import { useRouter } from "next/router"


export default function app({ Component, ...pageProps }: AppProps) {
    const router = useRouter()
    const noNav = router.pathname === '/login' ? false : true;

    return (
        <>
            {noNav && <Layout/>}
            <Component {...pageProps} />
        </>
    )
}

