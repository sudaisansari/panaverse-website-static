"use client"  // client side component

import Wrapper from "@/components/shared/Wrapper"
import QuarterBox from "@/components/shared/QuarterBox"
import Image from "next/image"
import { MdKeyboardArrowRight } from "react-icons/md"
// Images import
import Web3Img from "@/assets/images/metaverse.webp"
import AiImg from "@/assets/images/ai.webp"
import CloudImg from "@/assets/images/cloud.webp"
import AmbientImg from "@/assets/images/ambient.webp"
import GenomicsImg from "@/assets/images/genomics.webp"
import NetworkImg from "@/assets/images/network.webp"
import { useState } from "react"

// Programs Data

export const ProgramsData = [
    {
        slug: "wmd", // slug is unique and is like id
        header: "Web 3.0 (Blockchain) and Metaverse Specialization",
        description: "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
        image: Web3Img,
        Quaters: [
            {
                header: "Quarter IV",
                description: "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
                number: 4
            },
            {
                header: "Quarter V",
                description: "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
                number: 5
            },
        ]
    },
    {
        slug: "ai", // slug is unique and is like id
        header: "Artificial Intelligence (AI) and Deep Learning Specialization",
        description: "key={items.number}// To tell react that inside loop every box is different, It is necessory to pass key in every map loop on every parent elemetn, every quarter box number is unique.",
        image: AiImg,
        Quaters: [
            {
                header: "Quarter IV",
                description: "W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
                number: 4
            },
            {
                header: "Quarter V",
                description: "MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
                number: 5
            },
        ]
    },
    {
        slug: "cloud", // slug is unique and is like id
        header: "Cloud-Native Computing Specialization",
        description: "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.",
        image: CloudImg,
        Quaters: [
            {
                header: "Quarter IV",
                description: "CN-351: Certified Kubernetes Application Developer (CKAD)",
                number: 4
            },
            {
                header: "Quarter V",
                description: "CN-361: Developing Multi-Cloud Apps using CDK for Terraform",
                number: 5
            },
        ]
    },
    {
        slug: "ambient", // slug is unique and is like id
        header: "Ambient Computing and IoT Specialization",
        description: "The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.",
        image: AmbientImg,
        Quaters: [
            {
                header: "Quarter IV",
                description: "AC-351: Ambient Computing with Voice Assistants and Matter Devices",
                number: 4
            },
            {
                header: "Quarter V",
                description: "AC-361: Embedded Programming using C and Rust",
                number: 5
            },
        ]
    },
    {
        slug: "genomics", // slug is unique and is like id
        header: "Genomics and Bioinformatics Specialization",
        description: "Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.",
        image: GenomicsImg,
        Quaters: [
            {
                header: "Quarter IV",
                description: "Bio-351: Python for Biologists",
                number: 4
            },
            {
                header: "Quarter V",
                description: "Bio-361: Bioinformatics with Python",
                number: 5
            },
        ]
    },
    {
        slug: "network", // slug is unique and is like id
        header: "Network Programmability and Automation Specialization",
        description: "More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.",
        image: NetworkImg,
        Quaters: [
            {
                header: "Quarter IV",
                description: "NPA-351: CCNA 200-301 Certification",
                number: 4
            },
            {
                header: "Quarter V",
                description: "NPA-361: Network Programmability and Automation",
                number: 5
            },
        ]
    },
];

// CODE

const SpecializedTracks = () => {

    // In react we can re-render the content automatically using states and it is used in client component
    const [selectedItem, setSelectedItem] = useState("wmd") // It will be the initial value wmd inside use state()

    const selectedItemData = ProgramsData.find((item) => item.slug === selectedItem)
    //Find returns you an object that it finds first you need, Filter function will return you an array of same type
    console.log(selectedItem) // it will console two times in client side just to check, but it is not problem 

    return (
        <section id="specializedTracks">
            <Wrapper>
                {/* Header */}
                <div>
                    <h2 className="text-5xl font-bold whitespace-pre-line ">Specialized Tracks:</h2>
                    <p className="mt-3 text-xl text-slate-600 max-w-screen-sm">After completing the first three quarters the participants will select one or more specializations consisting of two courses each: </p>
                </div>
                <div className="mt-10 flex flex-col-reverse lg:flex-row gap-x-6 gap-y-8">
                    {/* Content Left */}
                    <div className="shadow-xl self-start sticky top-28 basis-8/12 border border-slate-200 rounded-xl py-8 px-8">
                        <h4 className="text-primary text-lg font-medium">Specialized Program</h4>
                        <h3 className="text-2xl font-bold">{selectedItemData?.header}</h3>
                        <p className="text-lg text-slate-600 mt-2">{selectedItemData?.description}</p>
                        <button className="text-primary text-xl mt-4 underline flex items-end">Learn More
                            <MdKeyboardArrowRight />
                        </button>
                        <div className="flex flex-col sm:flex-row gap-4 mt-8">
                            {
                                selectedItemData?.Quaters.map((item) => (
                                    <QuarterBox
                                        key={item.number}
                                        header={item.header}
                                        description={item.description}
                                        number={item.number}
                                        haveBorder={false}
                                    />
                                ))
                            }
                        </div>
                    </div>
                    {/* Content Right */}
                    <div className="px-4 py-6 space-y-4 basis-4/12 flex-1">
                        {
                            ProgramsData.map((item, i) => (
                                <div onClick={() => setSelectedItem(item.slug)} key={item.slug} className="items-center flex gap-x-4 hover:translate-y-1 cursor-pointer">
                                    <div className="flex-shrink-0 h-24 w-36">
                                        {/* <div className="w-20 h-20 rounded bg-red-300 "></div> */}
                                        <Image src={item.image} alt={item.header} className="h-24 object-cover rounded-md" />
                                    </div>
                                    <div>
                                        <h4 className="text-primary font-medium">Specialixed Tracks</h4>
                                        <h3 className="text-lg font-semibold">{item.header}</h3>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}

export default SpecializedTracks