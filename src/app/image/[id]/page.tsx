"use client";

import { useState } from "react";

const images = [
  {
    id: 1,
    src: "/concepts&Ideas/1.jpg",
    alt: "Image 1",
    categoryId: 1,
  },

  {
    id: 3,
    src: "/concepts&Ideas/2.jpg",
    alt: "Image 3",
    categoryId: 1,
  },
  {
    id: 4,
    src: "/concepts&Ideas/3.jpg",
    alt: "Image 4",
    categoryId: 1,
  },
  {
    id: 2,
    src: "/concepts&Ideas/4.jpg",
    alt: "Image 2",
    categoryId: 1,
  },
  {
    id: 7,
    src: "/concepts&Ideas/5.jpg",
    alt: "Image 7",
    categoryId: 1,
  },
  {
    id: 8,
    src: "/concepts&Ideas/6.jpg",
    alt: "Image 8",
    categoryId: 1,
  },
  {
    id: 5,
    src: "/concepts&Ideas/7.jpg",
    alt: "Image 5",
    categoryId: 1,
  },
  {
    id: 6,
    src: "/concepts&Ideas/8.jpg",
    alt: "Image 6",
    categoryId: 1,
  },

  {
    id: 10,
    src: "/concepts&Ideas/10.jpg",
    alt: "Image 10",
    categoryId: 1,
  },
  {
    id: 11,
    src: "/concepts&Ideas/11.jpg",
    alt: "Image 11",
    categoryId: 1,
  },
  {
    id: 12,
    src: "/concepts&Ideas/12.jpg",
    alt: "Image 12",
    categoryId: 1,
  },
  {
    id: 13,
    src: "/concepts&Ideas/13.jpg",
    alt: "Image 13",
    categoryId: 1,
  },
  {
    id: 14,
    src: "/concepts&Ideas/14.jpg",
    alt: "Image 14",
    categoryId: 1,
  },
  {
    id: 15,
    src: "/concepts&Ideas/15.jpg",
    alt: "Image 15",
    categoryId: 1,
  },
  {
    id: 16,
    src: "/wedding/1-SM520391.jpg",
    alt: "Image 16",
    categoryId: 4,
  },
  {
    id: 17,
    src: "/wedding/1-SM531472.jpg",
    alt: "Image 17",
    categoryId: 4,
  },
  {
    id: 18,
    src: "/wedding/2-SM207930.jpg",
    alt: "Image 18",
    categoryId: 4,
  },
  {
    id: 19,
    src: "/wedding/4-SM702869.jpg",
    alt: "Image 19",
    categoryId: 4,
  },
  {
    id: 20,
    src: "/wedding/4-SM724033.jpg",
    alt: "Image 20",
    categoryId: 4,
  },
  {
    id: 21,
    src: "/wedding/6-SM712437.jpg",
    alt: "Image 21",
    categoryId: 4,
  },
  {
    id: 22,
    src: "/wedding/10-SM104237.jpg",
    alt: "Image 22",
    categoryId: 4,
  },
  {
    id: 23,
    src: "/wedding/10-SM842994.jpg",
    alt: "Image 23",
    categoryId: 4,
  },
  {
    id: 24,
    src: "/wedding/11-SM732922.jpg",
    alt: "Image 24",
    categoryId: 4,
  },
  {
    id: 25,
    src: "/wedding/12-SM596722.jpg",
    alt: "Image 25",
    categoryId: 4,
  },
  {
    id: 26,
    src: "/wedding/12-SM668883.jpg",
    alt: "Image 26",
    categoryId: 4,
  },
  {
    id: 27,
    src: "/wedding/16-SM36943.jpg",
    alt: "Image 27",
    categoryId: 4,
  },
  {
    id: 28,
    src: "/wedding/18-SM464924.jpg",
    alt: "Image 28",
    categoryId: 4,
  },
  {
    id: 29,
    src: "/wedding/18-SM864436.jpg",
    alt: "Image 29",
    categoryId: 4,
  },
  {
    id: 30,
    src: "/wedding/19-SM742334.jpg",
    alt: "Image 30",
    categoryId: 4,
  },
  {
    id: 31,
    src: "/wedding/19-SM779219.jpg",
    alt: "Image 31",
    categoryId: 4,
  },
  {
    id: 32,
    src: "/wedding/19-SM917336.jpg",
    alt: "Image 32",
    categoryId: 4,
  },
  {
    id: 33,
    src: "/wedding/19-SM742334.jpg",
    alt: "Image 33",
    categoryId: 4,
  },
  {
    id: 34,
    src: "/wedding/19-SM779219.jpg",
    alt: "Image 34",
    categoryId: 4,
  },
  {
    id: 35,
    src: "/wedding/19-SM917336.jpg",
    alt: "Image 35",
    categoryId: 4,
  },
];
export default function page({ params }: { params: { id: string } }) {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState<number>();
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const filteredImages = images.filter(
    (item) => item.categoryId === JSON.parse(params.id)
  );

  const closeImage = () => {
    setOpen(false);
    setCurrentIndex(-1);
  };

  const nextImage = () => {
    if (currentIndex < filteredImages.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setId(filteredImages[currentIndex + 1].id);
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setId(filteredImages[currentIndex - 1].id);
    }
  };

  const downloadImage = (src: string, alt: string) => {
    const link = document.createElement("a");
    link.href = src;
    link.download = alt || "image";
    link.click();
  };

  return (
    <div>
      <div className="columns-1 md:columns-2  py-4 px-6">
        {images
          .filter((item) => item.categoryId === JSON.parse(params.id))
          .map((image, index) => (
            <div
              key={index}
              className="group relative mb-4 break-inside-avoid  cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />

              <div
                onClick={() => {
                  setId(image.id);
                  setOpen(true);
                }}
                className="absolute top-2 right-2 h-10 w-10 bg-black/50 opacity-0 flex justify-center items-center rounded-full hover:bg-black transition-opacity duration-500 group-hover:opacity-100 "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 23 23"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6"
                  />
                </svg>
              </div>
              <div className="absolute bottom-0 bg-black/50 w-full rounded-t-xl opacity-0 h-10 transition-opacity duration-500 group-hover:opacity-100 flex items-center">
                <div className="flex justify-between w-full px-3">
                  <div className="grid grid-cols-3 gap-1">
                    <div className="relative group/tooltip h-8 w-8 flex justify-center items-center hover:bg-black rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6 text-white"
                      >
                        <path d="M12 9a3.75 3.75 0 1 0 0 7.5A3.75 3.75 0 0 0 12 9Z" />
                        <path
                          fill-rule="evenodd"
                          d="M9.344 3.071a49.52 49.52 0 0 1 5.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 0 0 1.11-.71l.822-1.315a2.942 2.942 0 0 1 2.332-1.39ZM6.75 12.75a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Zm12-1.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <div className="absolute bottom-10  z-50 mb-1 w-max px-2 py-1 text-xs text-white bg-black/40 rounded opacity-0 transition-opacity -translate-1/2 duration-300 group-hover/tooltip:opacity-100">
                        Entire Shoot
                      </div>
                    </div>
                    <div className="h-8 w-8 flex group/tooltip justify-center items-center hover:bg-black rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6 text-white"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M3 6a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3V6ZM3 15.75a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2.25Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3v-2.25Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <div className="absolute bottom-10  z-50 mb-1 w-max px-2 py-1 text-xs text-white bg-black/40 rounded opacity-0 transition-opacity -translate-1/2 duration-300 group-hover/tooltip:opacity-100">
                        Similar Images
                      </div>
                    </div>
                    <div
                      onClick={() => downloadImage(image.src, image.alt)}
                      className="h-8 w-8 group/tooltip flex justify-center items-center hover:bg-black rounded-lg"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6 text-white"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <div className="absolute bottom-10  z-50 mb-1 w-max px-2 py-1 text-xs text-white bg-black/40 rounded opacity-0 transition-opacity -translate-1/2 duration-300 group-hover/tooltip:opacity-100">
                        Download
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-1">
                    <div className="h-8 w-8 group/tooltip flex justify-center items-center hover:bg-black rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6 text-white"
                      >
                        <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                      </svg>
                      <div className="absolute bottom-10  z-50 mb-1 w-max px-2 py-1 text-xs text-white bg-black/40 rounded opacity-0 transition-opacity -translate-1/2 duration-300 group-hover/tooltip:opacity-100">
                        Add To Cart
                      </div>
                    </div>

                    <div className="h-8 w-8 flex group/tooltip justify-center items-center hover:bg-black rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6 text-white"
                      >
                        <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                      </svg>
                      <div className="absolute bottom-10  z-50 mb-1 w-max px-2 py-1 text-xs text-white bg-black/40 rounded opacity-0 transition-opacity -translate-1/2 duration-300 group-hover/tooltip:opacity-100">
                        Add To Wishlist
                      </div>
                    </div>
                    <div className="h-8 w-8 group/tooltip  flex justify-center items-center hover:bg-black rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6 text-white"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <div className="absolute bottom-10  z-50 mb-1 w-max px-2 py-1 text-xs text-white bg-black/40 rounded opacity-0 transition-opacity -translate-1/2 duration-300 group-hover/tooltip:opacity-100">
                        More Info
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div
        className={` ${open ? "opacity-100 fixed top-0 left-0 w-full h-full z-50 bg-black/80 flex justify-center items-center transition-all duration-300 transform scale-100" : "opacity-0 transform scale-95"} `}
      >
        <div className="max-w-3xl">
          <img
            src={filteredImages.find((image) => image.id === id)?.src || ""}
            alt={filteredImages.find((image) => image.id === id)?.alt || ""}
            className="max-w-full max-h-full object-contain"
          />
        </div>
        <div
          onClick={closeImage}
          className="absolute top-3 right-3 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-10 text-white"
          >
            <path
              fill-rule="evenodd"
              d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4">
          <button
            onClick={prevImage}
            disabled={currentIndex === 0}
            className="text-white px-2 py-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-10"
            >
              <path
                fill-rule="evenodd"
                d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <button
            onClick={nextImage}
            disabled={currentIndex === filteredImages.length - 1}
            className=" text-white px-2 py-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-10"
            >
              <path
                fill-rule="evenodd"
                d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
