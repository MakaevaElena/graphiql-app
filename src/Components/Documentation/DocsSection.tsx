import { Box, IconButton, Typography } from '@mui/material';
import {
  schemaHeading,
  schemaTypes,
  sectionHeading,
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
  const [openField, setOpenField] = useState(false);
  const [openArgs, setOpenArgs] = useState(false);
  const [currentType, setCurrentType] = useState('');
  const [currentFiled, setCurrentField] = useState<Field>({
    name: '',

    args: [],
    type: {
      kind: '',
    },
    isDeprecated: false,
    deprecationReason: {
      name: '',
    },
  });

  const handlerOpenField = (currentType: string) => {
    setOpenField(!openField);
    setCurrentType(currentType);
  };

  const handlerOpenArgs = (currentField: Field) => {
    setOpenArgs(!openArgs);
    setCurrentField(currentField);
  };

  return (
    <Box sx={wrapperDocsSection}>
      <Typography sx={schemaHeading} variant="h4">
        {heading}
      </Typography>

      {types && (
        <Box sx={wrapperNextDocsSection}>
          <Typography sx={sectionHeading} variant="h4">
            {'Queries'}
          </Typography>
          {Object.values(types).map((type, i) => {
            if (type.name.startsWith('__') || type.kind !== 'OBJECT') {
              return null;
            }

            return (
              <Box key={i} sx={wrapperDocsSection}>
                <Typography sx={schemaTypes} variant="h4">
                  {type.name}
                </Typography>
                <Box onClick={() => handlerOpenField(type.name)}>
                  <IconButton>
                    <KeyboardArrowRightIcon />
                  </IconButton>
                </Box>
              </Box>
            );
          })}
        </Box>
      )}

      {openField && currentType && (
        <Box sx={wrapperNextDocsSection}>
          <Typography sx={sectionHeading} variant="h4">
            {'Fields'}
          </Typography>
          {Object.values(types).map((type) => {
            if (type.name === currentType) {
              if (type.hasOwnProperty('fields') && type.fields !== null) {
                return type.fields.map((field: Field, k: number) => {
                  return (
                    <Box key={k} sx={wrapperDocsSection}>
                      <Typography sx={schemaHeading} variant="h4">
                        {field.name}
                      </Typography>
                      <Box onClick={() => handlerOpenArgs(field)}>
                        <IconButton>
                          <KeyboardArrowRightIcon />
                        </IconButton>
                      </Box>
                    </Box>
                  );
                });
              }
            }
          })}
        </Box>
      )}

      {openArgs && currentFiled && (
        <Box sx={wrapperNextDocsSection}>
          <Typography sx={sectionHeading} variant="h4">
            {'Arguments'}
          </Typography>
          {currentFiled.hasOwnProperty('args') && currentFiled.args.length > 0
            ? currentFiled.args.map((arg, j) => {
                return (
                  <Box key={j} sx={wrapperDocsSection}>
                    <Typography sx={schemaHeading} variant="h4">
                      {arg.name}
                    </Typography>
                  </Box>
                );
              })
            : null}
        </Box>
      )}
    </Box>
  );
};

export default DocsSection;
