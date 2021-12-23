import { gql } from 'apollo-boost';

export const typeDefs = gql`
    extend type Mutation {
        ToggleCartHidden: Boolean
    }

`

// read from the cache
// @client means that anything calling this query (get cart hidden) is on the local cache not on the backend
const GET_CART_HIDDEN = gql`
    {
        cartHidden @client
    }
`

export const resolvers = {
    Mutation: {
        toggleCartHidden: (_root, _args, { cache }) => {
            const { cartHidden } = cache.readQuery({
                query: GET_CART_HIDDEN
            });

            cache.writeQuery({
                query: GET_CART_HIDDEN,
                data: { cartHidden: !cartHidden }
            });

            return !cratHidden
        }
    }
}