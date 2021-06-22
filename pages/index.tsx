import Head from 'next/head'
import Image from 'next/image'
import cloud from '../public/cloud.png'

export default function Home() {
    return (
        <div className="w-full h-screen grid items-center overflow-hidden">
            <Head>
                <title>....:::: felixstrobel ::::....</title>
                <meta name="description" content="....:::: felixstrobel ::::...."/>
                <link rel="icon" href="/favicon.ico"/>
                <link href="https://fonts.googleapis.com/css2?family=Goldman:wght@700&display=swap" rel="stylesheet"/>
            </Head>

            <main className="w-full h-screen flex flex-col">
                <div className="w-full h-5/6">
                    <Image src={cloud} layout="responsive" alt="cloud" className="select-none pointer-events-none"/>
                </div>

                <div
                    className="w-full h-1/6 mb-4 flex flex-col-reverse text-light text-center text-lg uppercase font-goldman">
                    felixstrobel
                </div>
            </main>
        </div>
)
}
