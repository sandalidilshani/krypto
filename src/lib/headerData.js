import request,{ gql } from "graphql-request"
import client from "@/lib/apolloClient"
const headerSection =async () => {
  const query = gql`
  query Headers {
  headers {
    about
    buyNfts
    contact
    createdAt
    id
    pricing
    publishedAt
    updatedAt
  }
}
 `;
const response = await client.request( query);
return response;
}
export default headerSection