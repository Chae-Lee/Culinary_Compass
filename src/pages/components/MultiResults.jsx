import React from "react";

// Test Data

const people = [
    
    {
      name: 'LOSIER',
      imageUrl:
        'https://images.unsplash.com/photo-1621327017866-6fb07e6c96ea?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      Location: "Tokyo",
      Country: "Japan",
      Cuisine: "French, Contemporary",
      Award: "3 Stars",
      Url: "https://guide.michelin.com/en/tokyo-region/tokyo/restaurant/l-osier",
    },
    {
      name: 'Azabu Kadowaki',
      imageUrl:
        'https://plus.unsplash.com/premium_photo-1674062989120-4ccc0eb35be0?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      Location: "Tokyo",
      Country: "Japan",
      Cuisine: "Japanese",
      Award: "3 Stars",
      Url: "https://guide.michelin.com/en/tokyo-region/tokyo/restaurant/azabu-kadowaki",
    },
    {
      name: 'Schloss Schauenstein',
      imageUrl:
        'https://images.unsplash.com/photo-1625938146357-754891591b16?q=80&w=3397&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      Location: "Fürstenau",
      Country: "Switzerland",
      Cuisine: "Creative, Country cooking",
      Award: "3 Stars, Green Star",
      Url: "https://guide.michelin.com/en/graubunden/frstenau/restaurant/schloss-schauenstein",
    },
    {
      name: 'JAN',
      imageUrl:
        'https://images.unsplash.com/photo-1542444256-164bd32f11fc?q=80&w=3405&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      Location: "Munich",
      Country: "Germany",
      Cuisine: "Creative, Modern Cuisine",
      Award: "3 Stars",
      Url: "https://guide.michelin.com/en/bayern/mnchen/restaurant/jan-1204321",
    },
    {
      name: 'Fat Duck',
      imageUrl:
        'https://images.unsplash.com/photo-1501595091296-3aa970afb3ff?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      Location: "Bray",
      Country: "United Kingdom",
      Cuisine: "Creative",
      Award: "3 Stars",
      Url: "https://guide.michelin.com/en/windsor-and-maidenhead/bray/restaurant/fat-duck",
    },
    {
      name: 'Enoteca Paco Pérez',
      imageUrl:
        'https://images.unsplash.com/photo-1621841957884-1210fe19d66d?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      Location: "Barcelona",
      Country: "Spain",
      Cuisine: "Spanish",
      Award: "2 Stars",
      Url: "https://guide.michelin.com/en/catalunya/barcelona/restaurant/enoteca204150",
    },
  ]

export default function MultiResults() {
    return (
        <ul role="list" className="divide-y divide-gray-100">
                        {people.map((person) => (
                            <li key={person.name} className="flex justify-between gap-x-6 py-5">
                            <div className="flex min-w-0 gap-x-4">
                                
                                <img className="h-24 w-24 flex-none rounded-md bg-gray-50" src={person.imageUrl} alt="" />
                                
                                <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
                                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.Cuisine}</p>
                                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.Award}</p>
                                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.Url}</p>
                                </div>
                            </div>
                            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                <p className="text-sm leading-6 text-gray-900">{person.Location}</p>
                                <p className="mt-1 text-xs leading-5 text-gray-500">{person.Country}</p>
                            </div>
                            </li>
                        ))}
                    </ul>
    )
}