import * as React from 'react';
import { Box, Link, Typography } from '@mui/material';
import { useAppSelector } from '../../store/slices/hooks';
import { schemaHeading, wrapperDocumentation } from './styles';
import { RootSchema } from '../../common-types/schema.types';

const Documentation: React.FC = () => {
  const schema: RootSchema = useAppSelector((store) => store.UIData.schema);
  console.log('Documentation', schema);
  const queryType = schema.queryType;
  const mutationType = schema.mutationType;
  const subscriptionType = schema.subscriptionType;
  const typeMap = schema.types;
  const directives = schema.directives;
  // {__schema{types{name,fields{name}}}}

  return (
    <Box>
      <Typography variant="h4" sx={schemaHeading}>
        Documentation
      </Typography>
      <Box sx={wrapperDocumentation}>
        <Typography sx={schemaHeading}>
          {schema.description ||
            'A GraphQL schema provides a root type for each kind of operation.'}
        </Typography>
        <Box title="Root Types">
          {queryType ? (
            <div>
              <span className="graphiql-doc-explorer-root-type">query</span>
              {': '}
              <Typography sx={schemaHeading} variant="h4">
                Query type:
              </Typography>
              <Link href="#">{queryType.name}</Link>
            </div>
          ) : null}
          {mutationType && (
            <div>
              <span className="graphiql-doc-explorer-root-type">mutation</span>
              {': '}
              <Link href="#">
                <Typography sx={schemaHeading} variant="h4">
                  {mutationType.name}
                </Typography>
              </Link>
            </div>
          )}
          {subscriptionType && (
            <div>
              <span className="graphiql-doc-explorer-root-type">
                subscription
              </span>
              {': '}
              <Link href="#">
                <Typography sx={schemaHeading} variant="h4">
                  {subscriptionType.name}
                </Typography>
              </Link>
            </div>
          )}
        </Box>
        <Box title="All Schema Types">
          <Typography sx={schemaHeading} variant="h4">
            All Schema Types:{' '}
          </Typography>
          {typeMap && (
            <div>
              {Object.values(typeMap).map((type) => {
                return (
                  <div key={type.name}>
                    <Link href="#">{type.name}</Link>
                  </div>
                );
              })}
            </div>
          )}
        </Box>
        <Box>
          <Typography sx={schemaHeading} variant="h4">
            Directives:{' '}
          </Typography>
          {directives && (
            <div>
              {Object.values(directives).map((directive) => {
                return (
                  <div key={directive.name}>
                    <Link href="#">{directive.name}</Link>
                  </div>
                );
              })}
            </div>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Documentation;
