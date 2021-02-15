import Link from "next/link"
import { useRouter } from 'next/router';
import { useEffect } from "react";

const FourOFour = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, [])
    return (
        <main className="four_o_four">
            <h1>Ooopss...</h1>
            <h2>That page cannot be found.</h2>
            <p>Go back to <Link href="/"><a>Homepage</a></Link></p>
        </main>
    );
}

export default FourOFour;