// import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main>
        <h1 className='text-center mt-[50px] text-[40px]'>Home</h1>
        <Link className='ml-[911px] text-orange-400	text-[20px] mt-[10px]' href="/auth">Auth page</Link>
        <div className='w-[200px] h-[1px] ml-[860px] bg-black mt-[5px]'></div>
    </main>
  );
}





