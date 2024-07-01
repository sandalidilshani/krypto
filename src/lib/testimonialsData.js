import request,{ gql } from "graphql-request"
import client from "@/lib/apolloClient"
const kryptousers =async () => {
  const query = gql`
  query Kryptousers {
  kryptousers {
    feedback
    name
    id
    image {
      id
    }
  }
}
 `;
const response = await client.request( query);
return response;
}
export default kryptousers;