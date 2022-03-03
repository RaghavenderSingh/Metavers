import { userInfo } from "os"
import { useRef } from "react";
import {ByMoralis , useMoralis , useMoralisQuery} from "react-moralis"
import SendMessage from './SendMessage'
import Message from './Message'

const MIN_DURATION = 15;
function Messages() {
    const endOfMessageRef = useRef(null);
    const { user } = useMoralis();

    const { data, loading, error } = useMoralisQuery(
        'Messages',
        (query) => query
        .ascending('createdAt')
        .greaterThan
        ('createdAt',new Date(Date.now() - 1000 * 60 * MIN_DURATION)),
        [],
        {
            live:true
        }
    );
    return (
        <div>
            <div className="message-section sticky z-10 pb-56">

                <div className="p-4 px-9 space-y-3">
                    {data.map((message) => (
                        <Message key={message.id} message={message} />
                    ))}
                </div>

                

                <div className='text-center text-gray-500 mt-5'>
                    <p ref={endOfMessageRef} >You're up to date {user.getUsername()} 🥳</p>
                </div>
            </div>
            <div className="flex justify-center">
                    <SendMessage endOfMessageRef={endOfMessageRef} />
                </div>
        </div>
    )
}

export default Messages