import React from "react";

// Footer rendered across every page of the site.

function Footer() {
    return (
        <>
                <div className="max-w-full">
                    <div class="flex fixed bottom-0 mx-auto w-full h-6 p-4 py-2 lg:py-10 bg-gray-800">

                                <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">Culinary Compass</span>
                                    <div class="flex sm:justify-right sm:mt-0">
                                        <img className="h-6 w-6  mr-8" src="/images/x-twitter.svg" alt="This is a placeholder for a link to an X, formerly known as Twitter, page."/>
                                        <img className="h-6 w-6  mr-8" src="/images/facebook.svg" alt="This is a placeholder for a link to a Facebook page"/>
                                        <img className="h-6 w-6  mr-8" src="/images/github.svg" alt="This is a placeholder for a link to the GitHub repository for this website's code."/>

                        </div>
                    </div>
                </div>
        </>
    )
}

export default Footer;