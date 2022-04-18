
import Head from "next/head";
import commerce  from "../../lib/commerce";
import { useRouter } from "next/router";
import SingleProduct from "../../components/SingleProduct";
export default function Collections(props) {

    return <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='ecommerce site created using Next JS, Commerce JS & Stripe' />
        <title>{props.product.name} - Neco Fashion</title>
  
      </Head>
      <div className="productpage">
        <SingleProduct {...props} />
      </div>
    </>
}

export const getServerSideProps = async (params) => {
  const productId = params.query.singleProduct
  
  const product = await commerce.products.retrieve(productId)

    return {
      props: {
        product
      }
    }
  }