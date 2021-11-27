import { sanityClient, urlFor } from "../sanity";
import Link from "next/link";
import { isMultiple } from "../utils";

export default function Home({ properties }) {
  console.log(properties);
  return (
    <>
      {properties && (
        <div className="main">
          <div className="feed-container">
            <h1>Places to stay near you</h1>
            <div className="feed">
              {properties.map((property, index) => (
                <Link href={`property/${property.slug.current}`}>
                  <div key={property._id} className="card">
                    <img src={urlFor(property.mainImage)}/>
                    <p>{property.reviews.length} review{isMultiple(property.reviews.length)}</p>
                    <h3>{property.title}</h3>
                    <h3><b>${property.pricePerNight}</b></h3>
                  </div>
                </Link>
              ))}
            </div>
            <div className="map"></div>
          </div>
        </div>   
      )}
    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[ _type == "property"]';
  const properties = await sanityClient.fetch(query);

  if (!properties.length) {
    return {
      props: {
        props: {
          properties: [],
        },
      }
    }
  } else {
    return {
      props: {
        properties
      }
    }
  }
}
