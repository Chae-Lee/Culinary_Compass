import React from "react";
import { Link } from "react-router-dom";

// Footer rendered across every page of the site.

function Footer() {
    return (
        <>
                    {/* <div className="px-2 sm:px-6 lg:px-8"></div> */}
            <div className="max-w-full">
                <div className="flex items-center justify-between mx-auto w-full h-6 p-4 py-2 px-8 py-8 custom-home">
                    <div>
                        <span className="flex text-sm text-gray-500 sm:text-center dark:text-gray-400">Culinary Compass</span>
                    </div>
                    <div className="flex">
                        <img className="h-6 w-6  mr-8" src="/images/x-twitter.svg" alt="This is a placeholder for a link to an X, formerly known as Twitter, page."/>
                        <img className="h-6 w-6  mr-8" src="/images/facebook.svg" alt="This is a placeholder for a link to a Facebook page"/>
                        <Link to="https://github.com/Chae-Lee/Culinary_Compass" target="_blank"><img className="h-6 w-6  mr-8" src="/images/github.svg" alt="This is a link to the GitHub repository for this website's code."/></Link>   
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;