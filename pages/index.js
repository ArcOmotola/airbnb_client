import { sanityClient } from "../sanity";

export default function Home({ properties }) {
  console.log(properties);
  return (
    <>
    tola
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
