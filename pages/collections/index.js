import Head from "next/head";
import AllCollections from "../../components/AllCollections";
import commerce  from "../../lib/commerce";

export default function Collections(props) {
    return <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='ecommerce site created using Next JS, Commerce JS & Stripe' />
        <title>Neco Fashion</title>
  
      </Head>
      <div className="allcollections">
        <AllCollections {...props} />
      </div>
    </>
  }


  export const getStaticProps = async () => {
    const {data : allCollections} = await commerce.products.list()
    console.log("All collections are",allCollections);
    return {
      props: {
        allCollections
      }
    }
  }


   