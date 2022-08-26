import wooCredential from './wooCredentialKey';

const wooapi = wooCredential();
async function categories() {
  try {
    const response = await wooapi.get('products/categories');
    return response;
  } catch (error) {
    console.log('error', error);
    throw new Error(error);
  }
}

export default categories;
