import Image from "next/image"
import { useMoralis } from "react-moralis"
function Login() {
    const {authenticate} = useMoralis();
    return (
        <div className="bg-black relative">
            Login Component
            <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
                <Image className="object-cover rounded-full"
                    src="https://i.pinimg.com/564x/dd/95/1b/dd951b246da5859e34a06bbb95484ab9.jpg" height={200} width={200}/>
                <button className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse"
                    onClick={authenticate}>
                    Login with Meta Mask
                </button>
            </div>

            <div className="w-full h-screen">
            <Image src="https://links.papareact.com/55n" layout="fill" objectFit="cover"/>
            </div>

        </div>
    )
}

export default Login






//https://i.pinimg.com/564x/77/09/3a/77093a1b3dbc8d7cd86be99694a54415.jpg