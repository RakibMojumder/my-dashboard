import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='text-white flex justify-center items-center'>
            <div className='text-center'>
                <h2>Not Found</h2>
                <p>Could not find requested resource</p>
                <Link href="/" className='bg-purple px-4 py-1 rounded'>Return Home</Link>
            </div>
        </div>
    )
}