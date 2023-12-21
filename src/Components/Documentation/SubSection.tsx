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

const SubSection: React.FC<DocsSectionProps> = ({ heading, types }) => {
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
                  <Box key={i}>
                    <SubSection
                      heading={`${type.name}{}`}
                      types={type.fields}
                    />
                  </Box>
                );
              }

              if (type.hasOwnProperty('args') && type.args.length > 0) {
                return (
                  <Box key={i}>
                    <SubSection
                      heading={`${type.name}(...)`}
                      types={type.args}
                    />
                  </Box>
                );
              }
              // if (type.hasOwnProperty('kind') && type.kind === 'NON_NULL') {
              //   return (
              //     <Box key={i}>
              //       <Typography sx={schemaTypes} variant="h4">
              //         {type.name}
              //       </Typography>
              //     </Box>
              //   );
              // }
              else
                return (
                  <Box key={i}>
                    <Typography sx={schemaTypes} variant="h4">
                      {type.name}
                    </Typography>
                  </Box>
                );
            }
          })}
        </Box>
      )}
    </Box>
  );
};

export default SubSection;
