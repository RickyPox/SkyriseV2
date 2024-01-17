import Navbar from "@/components/Navbar";
import Video from "@/components/Video";

export default function Home() {
  return (
    <div>
      <section className="my-[60px] ml-[100px]">
        <Navbar></Navbar>
      </section>

      <section>
        <Video></Video>
      </section>
    </div>
  )
}
