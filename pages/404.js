import Link from "next/link"
import { useRouter } from 'next/router'

const NotFound = () => {
    const router = useRouter()

    return (
        <div className="flex h-screen justify-center items-center flex-col test-center text-white">
            <h1 className="text-5xl font-bold">OOOOPS...</h1>
            <h2 className="text-xl mt-10 mb-4">That page cannot be found</h2>
            <p>Go back to the <Link href="/">Homepage</Link></p>
        </div>
    )
}

export default NotFound;