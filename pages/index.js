import Contents from "../components/Global_components/Contents";
import Sidebar from "../components/Global_components/Sidebar";

export default function Home() {
  return (
    <>
    <div className='lg:px-[10%] px-4 flex lg:flex-nowrap flex-wrap'>
      <Sidebar />
      <Contents />
    </div>
    </>
  )
}
