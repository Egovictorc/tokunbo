import React from "react";
import Image from "next/image"
import { IData } from "./types"
import { Typography } from "@mui/material";

import ApiResponse from "../data/response.json"
import CarImage from "./CarImage";

const DetectionService: React.FC<Omit<IData, "show">> = ({
name, src, alt, 
}) => {
    const {car: {make, model}, color} = ApiResponse;

    return (
        <div>
            <CarImage src={src} alt={alt} />
            <Typography variant="h5">
                Hello {name}
            </Typography>
            <Typography variant="body1">
                Your car is {color.name} {make} {model}
            </Typography>
        </div>
    )
}

export default DetectionService
