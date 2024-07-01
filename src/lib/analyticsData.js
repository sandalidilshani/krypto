import request,{ gql } from "graphql-request"
import client from "@/lib/apolloClient"
const analyticSection =async () => {
  const query = gql`
  query Analytics {
   analytics {
    button
    title
    subtitle
    maintitle
  }
}
 `;
const response = await client.request( query);
return response;
}
export default analyticSection