import Image from "next/image";
import Card from "./components/Card";
import Calendar_img from "../../public/assets/images/illustration-consistent-schedule.webp"
import Chat_Img from "../../public/assets/images/illustration-ai-content.webp"
import Create_img from "../../public/assets/images/illustration-create-post.webp"
import Follower_Img from "../../public/assets/images/illustration-grow-followers.webp"
import People_Img from "../../public/assets/images/illustration-audience-growth.webp"
import Schedule_Img from "../../public/assets/images/illustration-schedule-posts.webp"
import Social_Media_Img from "../../public/assets/images/illustration-multiple-platforms.webp"
import Star_Review_Img from "../../public/assets/images/illustration-five-stars.webp"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="mx-auto container px-4 flex flex-row justify-center">
        <div className="inline-grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-5" style={{ grid: "none"}}>
            <Card className=" px-5 bg-Yellow-100 row-start-1 row-span-5 col-span-1 flex flex-col gap-5 justify-center">
                <h2>
                    <span>Create and schedule content</span>
                    <br/>
                    <span className="text-Purple-500 italic">quicker.</span>
                </h2>
                <Image src={Create_img} alt="AI icon" width={200} height={200} className="" />
            </Card>
            <Card className="pl-5 pt-5 pb-6 pr-[10px] bg-Yellow-500 row-start-6 row-span-5 col-span-1 flex flex-col gap-10 justify-between">
                <h2>Write your content using AI.</h2>
                <Image src={Chat_Img} alt="AI icon" width={200} height={200} className="" />
            </Card> 
            <Card className="px-8 py-10 bg-Purple-500 row-start-1 row-span-4 col-span-2 text-White text-center items-center flex flex-col gap-5">            
                <h1 className="text-5xl">
                    <span>Social Media</span>{" "}<span className="text-Yellow-500">10x</span>
                    <br/>
                    <span className="italic">Faster</span>{" "}<span> with AI</span>
                </h1>           
                <div>                
                    <div className="flex flex-row justify-center items-center">
                    <Image src={Star_Review_Img} alt="AI icon" width={170} height={200} className="align-self-center" />
                    </div>
                    <p className="text-White">Over 4,000 5-star reviews</p>
                </div>
            </Card>
            <Card className="p-5 bg-White row-start-5 col-span-1 row-span-3 overflow-hidden flex flex-col justify-between max-h-[220px] ">
                <Image src={Social_Media_Img} alt="AI icon" width={400} height={400} className="max-w-[275px]" />
                <h3>Manage multiple accounts and platforms.</h3>
            </Card>
            <Card className="px-5 pt-5 bg-Yellow-500 col-span-1 row-span-3 flex flex-col gap-6 justify-between overflow-hidden max-h-[220px]">
                <h3>
                    Maintain a consistent posting schedule.
                </h3>
                <Image src={Calendar_img} alt="AI icon" width={400} height={400} className="" />
            </Card> 
            <Card className="pl-5 bg-Purple-100 row-start-1 row-span-7 col-span-1 flex flex-col gap-4 justify-center overflow-hidden">
                <h3>Schedule to social media.</h3>
                <Image src={Schedule_Img} alt="AI icon" width={400} height={400} className="max-w-[300px]" />
                <p className="leading-5">Optimize post timings to publish content at the perfect time for your audience.</p>
            </Card>
            <Card className="px-5 py-7 bg-White col-span-1 row-span-3 flex flex-col justify-between max-h-[220px]">
                <div className="flex flex-col gap-5">                
                    <div className="text-5xl leading-7 font-medium">&gt;56%</div>
                    <p>faster audience growth</p>
                </div>
                <Image src={People_Img} alt="AI icon" width={200} height={200} className="" />
            </Card>
            <Card className="p-5 bg-Purple-500 col-span-2 row-span-3 text-White flex flex-row gap-2">
                <Image src={Follower_Img} alt="AI icon" width={200} height={200} className="" />
                <h2 className="self-center">
                    Grow followers with non-stop content.
                </h2>
            </Card>
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
