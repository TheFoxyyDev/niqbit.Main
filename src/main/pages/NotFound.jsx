import { useNavigate } from 'react-router'

function NotFound() {
    const navigate = useNavigate()

    function goBack() {
        const leng = window.history.length
        if (leng <= 2) {
            navigate("/");
        } else {
            window.history.go(-1)
        }
    }

    return (
        <div className="absolute bg-[#0A0D12] w-full h-full flex justify-center items-center flex-col">
            <div className="relative font-mono text-white text-[250px]">404</div>
            <div className="relative -mt-15 font-mono text-white text-5xl">Oops! Page was <span className="text-defgreen">not found</span></div>
            <button className="w-auto h-auto bg-[#0D1017] border-[#1E2530] border-[0.5px] cursor-pointer text-3xl font-mono text-white mt-4 p-3 pr-6 pl-6 rounded-2xl" onClick={goBack}>Go Back</button>
        </div>
    )
}

export default NotFound