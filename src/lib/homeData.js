import request,{ gql } from "graphql-request"
import client from "@/lib/apolloClient"
const headerSection =async () => {
  const query = gql`
  query Homes {
  homes {
  maintitle
    buyButton
    subtitle
    createdAt
    updatedAt
    sellButton
  }
}
 `;
const response = await client.request( query);
return response;
}
export default headerSection