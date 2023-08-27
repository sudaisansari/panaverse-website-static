import Button from "@/components/shared/Button"
import Wrapper from "@/components/shared/Wrapper"
import QuarterBox from "@/components/shared/QuarterBox"

const CoreTracksData = [
    {
        header: "Quarter I",
        description: "CS-101: Object-Oriented Programming using TypeScript",
        number: 1
    },
    {
        header: "Quarter II",
        description: "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
        number: 2
    },
    {
        header: "Quarter III",
        description: "$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development",
        number: 3
    }
];

const CoreTracks = () => {
    const header = "Core Courses \n (Common in All Specializations):"
    return (
        <section className="mt-16 lg:mt-28">
            <Wrapper>
                {/* Content */}
                <div className="max-w-screen-md">
                    <h4 className="text-teal-400 font-semibold text-xl px-2 mt-4">Program of Studies</h4>
                    <h2 className="text-5xl font-bold whitespace-pre-line">{header}</h2>
                    <p className="mt-6 text-xl text-slate-600">Every participant of the program will start by completing the following three core courses:</p>
                    <div className="mt-5">
                        <Button text="Learn more" />
                    </div>
                </div>
                {/* Boxes */}
                <div className="my-20 flex flex-col md:flex-row gap-x-8 gap-y-6">
                    {
                        // CoreTracksData.map((item, i) => {console.log(item, i)})

                        CoreTracksData.map((items, i) => (
                            <QuarterBox
                                key={items.number}// To tell react that inside loop every box is different, It is necessory to pass key in every map loop on every parent elemetn, every quarter box number is unique. 
                                header={items.header}
                                description={items.description}
                                number={i + 1}
                            />
                        )
                        )
                    }

                </div>
            </Wrapper>
        </section>
    )
}

export default CoreTracks