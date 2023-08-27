import { FC } from "react"


const Button: FC<{ text: string }> = ({ text }) => {
    return (
        <button className="bg-[#00616C] text-white px-8 py-4 rounded-full
        font-medium text-xl hover:scale-105 hover:shadow-lg">
            {text}
        </button>
    )
}

export default Button