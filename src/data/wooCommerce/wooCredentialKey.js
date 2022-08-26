import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

function wooCredential() {
  const wooapi = new WooCommerceRestApi({
    url: process.env.WORDPRESS_URL,
    consumerKey: process.env.WC_CONSUMER_KEY,
    consumerSecret: process.env.WC_CONSUMER_SECRET,
  });
  return wooapi;
}
export default wooCredential;
