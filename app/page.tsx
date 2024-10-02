import Image from "next/image";
import image from "../../..public/girl-image.png";
 


export default function Home() {
    return (
        <div className="flex justify-center item-center h-[490px]"id="girl-image.png" >
      <div className="w-[800px] h-[200px] m-[50px] text-zinc-950 font-bold text-[35px] pl-[10px] nl-[20px]">
       Hey,
       <br />
       My Name is <span className="span1">Soofia Naz</span>
      <br />
      <h2>I am a Student at <span className="span1">GIAIC</span></h2>
      <br />
      <p className="text-[20px]">I have learned <span>HTML</span>, <span>CSS</span>, <span>JavaScript</span> and <span>TypeScript</span>. Currently I'm learning <span className="span3">Next.JS</span> and <span className="span2">This is my First <span className="span3">Next.JS</span> Project!</span></p>
      </div>
      <Image src="/girl-image.png" alt="girl pic"width={300} height={300}/>
      <div className="h-[250px] w-[250px]  justify-center mt-[60px] item-center">
      
      </div>
      </div>
    )
}