
import { useEffect} from "react";
import Link from 'next/link';
import { useRouter } from "next/router";
const Notfound = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000)
    }, [])
    return (
        <div>
            <h2>404 Not found</h2>

        </div>
    )
}

export default Notfound;
