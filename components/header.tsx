'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="flex items-center justify-between">
                    {/* LOGO */}
                    <div className="flex items-center">
                        <Image src={"/image-logo.jpg"} alt="logo" width={40} height={40} className="mr-3" />
                        <h1 className="text-2xl font-bold text-blue-600">Image Identifier</h1>
                    </div>
                    {/* Menus */}
                    <nav>
                        <ul className="flex space-x-4">
                            <Link className="text-gray-600 hover:underline hover:text-blue-600 transition duration-150 ease-in-out" href={"#"}>
                                Home
                            </Link>
                            <Link className="text-gray-600 hover:text-blue-600 transition duration-150 hover:underline ease-in-out" href={"#how-it-works"}>
                                Home it works
                            </Link>
                            <Link className="text-gray-600 hover:text-blue-600 hover:underline transition duration-150 ease-in-out" href={"#features"}>
                                Features
                            </Link>



                        </ul>
                    </nav>


                </div>

            </div>
        </header>
    )
}

export default Header