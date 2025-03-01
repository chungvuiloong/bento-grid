import Image from "next/image";
import Card from "./components/Card";
import Chat_Img from "../../public/assets/images/illustration-ai-content.webp"
import People_Img from "../../public/assets/images/illustration-audience-growth.webp"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="mx-auto container px-4">
        <div className=" grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-4">
            <Card className=" px-5 bg-Yellow-100 row-start-1 row-span-5 col-span-1">Create and schedule content quicker.</Card>
            <Card className="p-5 bg-Yellow-500 row-start-6 row-span-5 col-span-1 flex flex-col gap-10">
                <p className="text-3xl leading-7 font-medium">Write your content using AI.</p>
                <Image src={Chat_Img} alt="AI icon" width={200} height={200} className="" />
            </Card> 
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
            <Card className="px-5 py-7 bg-White col-span-1 row-span-3 flex flex-col justify-between">
                <div className="flex flex-col gap-5">                
                    <p className="text-5xl leading-7 font-medium">&gt;56%</p>
                    <p>faster audience growth</p>
                </div>
                <Image src={People_Img} alt="AI icon" width={200} height={200} className="" />
            </Card>
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
