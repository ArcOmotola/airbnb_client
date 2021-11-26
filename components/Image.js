import { urlFor } from "../sanity"

export default function Image({identifier, image}) {
    return (
        <div className={identifier === "main-image" ? "main-image" : "image"}>
            <img src={urlFor(image).auto('format')} alt="" />
        </div>
    )
}
