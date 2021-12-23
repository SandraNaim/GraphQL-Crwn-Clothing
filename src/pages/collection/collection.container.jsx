import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import Spinner from '../spinner/spinner.component';
import CollectionPage from './collection.component';

const GET_COLLECTIONS_BY_TITLE = gql`
    query getCollectionsByTitle($title: String!) {
        getCollectionsByTitle(title: $title) {
            collections {
                id
                title
                items {
                    id
                    name
                    price
                    imageUrl
                }
            }
        }
    }
    
`;

const CollectionsPageContainer = () => (
    <Query query={GET_COLLECTIONS_BY_TITLE} variables={{ title: matchMedia.params.collectionId }} >
        {
            ({ loading, data: { getCollectionsByTitle } }) => {
                if (loading) return <Spinner />;
                return <CollectionPage collections={getCollectionsByTitle} />;
            }
        }
    </Query>
)

export default CollectionsPageContainer;