function cardMessage({ message, userMsg, user }) {
    if (userMsg === user) {
        return (
            <div className='bg-purple-950 mr-3 mt-5 mb-5 max-w-5/6 p-3 self-end rounded-sm'>
                <p className='text-gray-100'>{message}</p>
            </div>
        );
    } else {
        return (
            <div className='bg-indigo-800 ml-3 mt-5 mb-5 w-fit max-w-5/6 p-3 rounded-sm'>
                <h1 className='font-bold text-gray-100 text-md mb-2'>{userMsg}</h1>
                <p className='text-gray-100'>{message}</p>
            </div>
        );
    }
}

export default cardMessage;