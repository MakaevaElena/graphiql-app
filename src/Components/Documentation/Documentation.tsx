import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { useAppSelector } from '../../store/slices/hooks';

type Schema = {
  directives: Array<object>;
  mutationType?: Array<object>;
  queryType: object;
  subscriptionsType?: object;
  types: Array<object>;
  description?: string;
};

const Documentation: React.FC = () => {
  const schema: Schema = useAppSelector((store) => store.UIData.schema);
  console.log('Documentation', schema);
  const queryType = schema.queryType;
  const mutationType = schema.mutationType;
  const subscriptionType = schema.subscriptionsType;
  // const typeMap = schema.types;

  return (
    <Box>
      <Typography variant="h4">Documentation</Typography>
      <Box>
        <Typography>
          {schema.description ||
            'A GraphQL schema provides a root type for each kind of operation.'}
        </Typography>
        <Box title="Root Types">
          {queryType ? (
            <div>
              <span className="graphiql-doc-explorer-root-type">query</span>
              {': '}
              {/* <TypeLink type={queryType} /> */}
            </div>
          ) : null}
          {mutationType && (
            <div>
              <span className="graphiql-doc-explorer-root-type">mutation</span>
              {': '}
              {/* <TypeLink type={mutationType} /> */}
            </div>
          )}
          {subscriptionType && (
            <div>
              <span className="graphiql-doc-explorer-root-type">
                subscription
              </span>
              {': '}
              {/* <TypeLink type={subscriptionType} /> */}
            </div>
          )}
        </Box>
        <Box title="All Schema Types">
          {/* {typeMap && (
            <div>
              {Object.values(typeMap).map((type) => {
                if (
                  ignoreTypesInAllSchema.includes(type.name) ||
                  type.name.startsWith('__')
                ) {
                  return null;
                }

                return (
                  <div key={type.name}>
                    <TypeLink type={type} />
                  </div>
                );
              })}
            </div>
          )} */}
        </Box>
      </Box>
    </Box>
  );
};

export default Documentation;
