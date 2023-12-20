import { Box, IconButton, Typography } from '@mui/material';
import {
  schemaHeading,
  schemaTypes,
  wrapperDocsSection,
  wrapperNextDocsSection,
} from './styles';
import {
  Direc,
  Field,
  MutationType,
  QueryType,
  Type,
} from '../../common-types/schema.types';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useState } from 'react';

type DocsSectionProps = {
  heading: string;
  types:
    | Direc[]
    | MutationType
    | QueryType
    | QueryType[]
    | Type
    | Type[]
    | Field
    | Field[];
};

const DocsSection: React.FC<DocsSectionProps> = ({ heading, types }) => {
  const [data, setData] = useState(false);

  const openNextSection = () => {
    setData(!data);
  };

  return (
    <Box sx={wrapperDocsSection}>
      <Typography sx={schemaHeading} variant="h4">
        {heading}
      </Typography>
      <Box onClick={openNextSection}>
        <IconButton>
          <KeyboardArrowRightIcon />
        </IconButton>
      </Box>

      {data && types && (
        <Box sx={wrapperNextDocsSection}>
          {Object.values(types).map((type, i) => {
            if (type.name.startsWith('__')) {
              return null;
            }

            if (type) {
              if (type.hasOwnProperty('fields') && type.fields !== null) {
                return (
                  <>
                    <Box key={i}>
                      <DocsSection
                        heading={`${type.name}: { fields }`}
                        types={type.fields}
                      />
                    </Box>
                  </>
                );
              } else
                return (
                  <div key={`${Math.random()}-${type.name}-${i}`}>
                    <Typography sx={schemaTypes} variant="h4">
                      {type.name}
                    </Typography>
                  </div>
                );
            }
          })}

          {Object.values(types).map((type, i) => {
            if (type.name.startsWith('__')) {
              return null;
            }

            if (type) {
              if (type.hasOwnProperty('args') && type.args.length > 0) {
                return (
                  <Box key={i}>
                    <DocsSection
                      heading={`${type.name} ( ...args )`}
                      types={type.args}
                    />
                  </Box>
                );
              } else
                return (
                  <div key={`${Math.random()}-${type.name}-${i}`}>
                    <Typography sx={schemaTypes} variant="h4">
                      {type.name}
                    </Typography>
                  </div>
                );
            }
          })}
        </Box>
      )}
    </Box>
  );
};

export default DocsSection;
