import React from "react";
import Image from "next/image"
import { string } from "yup/lib/locale";


const CarImage: React.FC<{
    src: string,
    alt: string
}> = ({src, alt}) => {

    return (
        <Image
        src={src}
        alt={alt}
        width={100}
        height={120}
        placeholder="blur"
        blurDataURL={src}
      />
    )
}

export default CarImage;
