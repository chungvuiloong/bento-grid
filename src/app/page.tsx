import Image from "next/image";
import Card from "./components/Card";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="mx-auto container px-4">
        <div className="bg-gray-100 grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-4">
            <Card className=" bg-Yellow-100 row-start-1 row-span-5">Create and schedule content quicker.</Card>
            <Card className="bg-Yellow-500 row-start-6 row-span-5">Write your content using AI.</Card> 
            <Card className="bg-Purple-500 row-start-1 row-span-4 col-span-2 text-White">
                <span>Social Media 10x Faster with AI</span>
                <span>Over 4,000 5-star reviews</span>
            </Card>
            <Card className="bg-White row-start-5 col-span-1 row-span-3">Manage multiple accounts and platforms.</Card>
            <Card className="bg-Yellow-500 col-span-1 row-span-3">Maintain a consistent posting schedule.</Card> 
            <Card className="bg-Purple-100 row-start-1 row-span-7 col-span-1">
                <span>Schedule to social media.</span>
                <span>Optimize post timings to publish content at the perfect time for your audience.</span>
            </Card>
            <Card className="bg-White col-span-1 row-span-3">56% faster audience growth</Card>
            <Card className="bg-Purple-500 col-span-2 row-span-3 text-White">Grow followers with non-stop content.</Card>
        </div>
        {/* <div className="grid grid-flow-col grid-rows-10 gap-4">
            <div className="bg-Yellow-100 row-start-1 row-span-5">Create and schedule content quicker.</div>
            <div className="bg-Yellow-500 row-start-6 row-span-5">Write your content using AI.</div> 
            <div className="bg-Purple-500 row-start-1 row-span-4 col-span-2 text-White">
                <span>Social Media 10x Faster with AI</span>
                <span>Over 4,000 5-star reviews</span>
            </div>
            <div className="bg-White row-start-5 col-span-1">Manage multiple accounts and platforms.</div>
            <div className="bg-Yellow-500 col-span-1">Maintain a consistent posting schedule.</div> 
            <div className="bg-Purple-100 row-start-1 row-span-5">
                <span>  Schedule to social media.</span>
                <span>Optimize post timings to publish content at the perfect time for your audience.</span>
            </div> */}
            {/* <div className="col-span-1">56% faster audience growth</div>
            <div className="bg-Purple-500 col-span-2 text-White">Grow followers with non-stop content.</div> */}
        {/* </div> */}
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
