import { useMoralis } from "react-moralis";
import Image from "next/image";
import Avatar from "../components/Avatar"
import ChangeUserName from "../components/ChangeUserName"


function Header() {
    const {user} = useMoralis();
  return (
    <div className="sticky top-0 p-5 z-50 bg-black shadow-sm border-b-2 border-pink-700 text-pink-500">
        <div className=" grid grid-cols-5 lg:grid-cols-6 items-end 
        lg:items-center">
        <div className="relative h-24 w-24 max-auto hidden lg:inline-grid">
            <Image 
            layout="fill" 
            objectFit="cover"
            className="rounded-full" 
            src="https://i.pinimg.com/564x/dd/95/1b/dd951b246da5859e34a06bbb95484ab9.jpg"/>
        </div>
        <div className=" col-span-4  text-left lg:text-center">
             <div className=" relative h-48 w-48 lg:mx-auto 
             border-pink-500 border-8 rounded-full">
                 <Avatar/>
             </div>
             <h1 className=" text-3xl">Welcome to Metaverse</h1>
             <h2 className="text-5xl font-bold truncate">{user.getUsername()}</h2>
             <ChangeUserName/>
        </div>
        </div>
    </div>
  )
}

export default Header;