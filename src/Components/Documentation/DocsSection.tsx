import { Box, IconButton, Typography } from '@mui/material';
import {
  activePoint,
  flexColumnCenter,
  schemaHeading,
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
import styles from './styles.module.scss';
import FieldsList from './FieldsList';

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

const DEFAULT_CURRENT_FIELD = {
  name: '',

  args: [],
  type: {
    kind: '',
  },
  isDeprecated: false,
  deprecationReason: {
    name: '',
  },
};

const DocsSection: React.FC<DocsSectionProps> = ({ heading, types }) => {
  const [activeDocsLink, setActiveDocsLink] = useState('');
  const [currentFiled, setCurrentField] = useState<Field>(
    DEFAULT_CURRENT_FIELD
  );
  const [currentFiledType, setCurrentFieldType] = useState('');

  const handlerOpenTypes = (field: Field, currentFieldType: string) => {
    setCurrentFieldType(currentFieldType);
    setCurrentField(field);
    setActiveDocsLink(field.name);
  };

  const queries = Object.values(types)[0];
  const fields = queries.fields;

  return (
    <Box sx={wrapperDocsSection}>
      {fields && (
        <Box sx={wrapperNextDocsSection}>
          <Typography sx={sectionHeading} variant="h4">
            {heading.toUpperCase()}
          </Typography>

          {fields.map((field: Field, k: number) => {
            const fieldType =
              field.type.name ||
              field.type.ofType?.name ||
              field.type.ofType?.ofType?.name ||
              field.type.ofType?.ofType?.ofType?.name;

            return (
              <Box
                key={k}
                sx={Object.assign(
                  {},
                  wrapperDocsSection,
                  activeDocsLink === field.name && activePoint
                )}
                className={`${styles.queryLine}`}
                onClick={() => {
                  if (fieldType) handlerOpenTypes(field, fieldType);
                }}
              >
                <Typography sx={schemaHeading} variant="h4">
                  {`${field.name}(...): ${fieldType}`}
                </Typography>

                {fieldType !== 'SCALAR' && (
                  <IconButton>
                    <KeyboardArrowRightIcon />
                  </IconButton>
                )}
              </Box>
            );
          })}
        </Box>
      )}

      {currentFiledType && (
        <Box sx={flexColumnCenter}>
          <FieldsList
            currentFiledType={currentFiledType}
            currentFiled={currentFiled}
            types={types}
          />

          <Box>
            {currentFiled.args.length > 0 && (
              <Box sx={wrapperNextDocsSection}>
                <Typography sx={sectionHeading} variant="h4">
                  {'ARGUMENTS'}
                </Typography>
                {currentFiled.hasOwnProperty('args') &&
                currentFiled.args.length > 0
                  ? currentFiled.args.map((arg, j) => {
                      const argType =
                        arg.type.name ||
                        arg.type.ofType?.name ||
                        arg.type.ofType?.ofType?.name ||
                        arg.type.ofType?.ofType?.ofType?.name;

                      return (
                        <Box key={j} sx={wrapperDocsSection}>
                          <Typography sx={schemaHeading} variant="h4">
                            {`${arg.name}: ${argType}`}
                          </Typography>
                        </Box>
                      );
                    })
                  : null}
              </Box>
            )}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default DocsSection;
