"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const images = [
    {
      id: 1,
      src: "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/HomeImages/Concept-and-Ideas.jpg?w=248&fit=crop&auto=format&v=1734604240960",
      alt: "Image 1",
      category: "Concepts & Ideas",
    },
    {
      id: 2,
      src: "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/HomeImages/Fashion71.jpg?w=248&fit=crop&auto=format&v=1734154413670",
      alt: "Image 2",
      category: "Lifestyle: Seniors",
    },
    {
      id: 3,
      src: "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/900x600/11441/220-SM402591.jpg",
      alt: "Image 3",
      category: "Beauty",
    },
    {
      id: 6,
      src: "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/HomeImages/Rural-India.jpg?w=248&fit=crop&auto=format&v=1734338762354",
      alt: "Image 6",
      category: "Fitness",
    },
    {
      id: 4,
      src: "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/HomeImages/Wedding.jpg?w=248&fit=crop&auto=format&v=1734698007460",
      alt: "Image 4",
      category: "Wedding",
    },
    {
      id: 5,
      src: "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/900x600/20900/300-SM1085527.jpg",
      alt: "Image 5",
      category: "Vacations & Holidays",
    },

    {
      id: 8,
      src: "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/HomeImages/Lifestyle-Seniors.jpg?w=248&fit=crop&auto=format&v=1734338762354",
      alt: "Image 8",
      category: "Technology",
    },
    {
      id: 9,
      src: "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/HomeImages/Lifestyle-Adult.jpg?w=248&fit=crop&auto=format&v=1734338762354",
      alt: "Image 9",
      category: "Travel & Outdoors",
    },
  ];
  return (
    <div>
      <div className="flex justify-center px-4">
        <div className="container max-w-screen-xl mx-auto">
          <h1 className="text-2xl font-bold text-center py-5">
            Popular Collections
          </h1>

          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-2 py-10">
            {images.map((image) => (
              <div
                key={image.id}
                className="group relative mb-4 break-inside-avoid overflow-hidden cursor-pointer"
                onClick={() => router.push(`/image/${image.id}`)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">
                    {image.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
