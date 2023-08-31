import Wrapper from "../shared/Wrapper"
import Image from "next/image"
import ProgramImage from "@/assets/images/Program Outcome.png"
import { GiCheckMark } from "react-icons/gi"

const OutcomePoints = ["Product Ownership", "Freelacing", "Global Marketing by  DAO", "Boosting Economy."];

const ProgramOutcome = () => (
    <section className="mt-16 md:mt-28 pb-6">
        <Wrapper>
            <div className="flex gap-x-8 items-center flex-col-reverse md:flex-row">
                {/* Left Image */}
                <div className="flex-1 bg-slate-500">
                    <Image src={ProgramImage} alt={"Program Outcome"} />
                </div>
                {/* Right Content */}
                <div className="flex-1">
                    <h2 className="text-5xl font-bold">
                        The Outcome for Participants of the Program
                    </h2>
                    <p className="text-slate-600 mt-4 text-lg">
                        As a graduate of this program, you will own valuable products such as Full-Stack App Templates, AR and VR Experiences, and APIs that are marketed globally by the Panaverse DAO. You will also have the opportunity to offer your services at a rate of $50 per hour, providing a path to financial stability while contributing to the growth of Pakistan's software exports.
                    </p>
                    <div className="mt-6 gap-x-2 gap-y-4 grid grid-cols-2">
                        {OutcomePoints.map((item, i) => (
                            <div key={i} className="flex items-center gap-x-3">
                                <GiCheckMark className="text-[#06BF9C]" />
                                <h3 className="font-medium text-lg">{item}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Wrapper>
    </section>

)

export default ProgramOutcome