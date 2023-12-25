import { Box, IconButton, Typography } from '@mui/material';
import {
  flexColumnCenter,
  schemaHeading,
  sectionHeading,
  sectionSubHeading,
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
// import styles from './styles.module.scss';

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

const DocsSection: React.FC<DocsSectionProps> = ({ types }) => {
  // const [currentType, setCurrentType] = useState('');
  // const [activeDocsLink, setActiveDocsLink] = useState(false);
  const [currentFiled, setCurrentField] = useState<Field>(
    DEFAULT_CURRENT_FIELD
  );
  const [currentFiledType, setCurrentFieldType] = useState('');

  // const handlerOpenField = (currentType: string) => {
  //   // queryRef.current?.classList.add('active');

  //   console.log('activeDocsLink', activeDocsLink);
  //   setCurrentType(currentType);
  //   // setCurrentField(DEFAULT_CURRENT_FIELD);
  //   setCurrentField('');
  //   setActiveDocsLink(true);
  // };

  // const handlerOpenArgs = (currentField: Field) => {
  //   setCurrentField(currentField);
  // };

  const handlerOpenTypes = (field: Field, currentFieldType: string) => {
    setCurrentFieldType(currentFieldType);
    setCurrentField(field);
  };

  const queries = Object.values(types)[0];
  // console.log('queries', queries);

  const fields = queries.fields;
  // console.log('fields', fields);

  return (
    <Box sx={wrapperDocsSection}>
      {/* <Typography sx={schemaHeading} variant="h4">
        {heading}
      </Typography> */}

      {/* {currentType && ( */}
      {fields && (
        <Box sx={wrapperNextDocsSection}>
          <Typography sx={sectionHeading} variant="h4">
            {'QUERIES'}
          </Typography>

          {fields.map((field: Field, k: number) => {
            const fieldType =
              field.type.kind === 'OBJECT'
                ? field.type.name
                : field.type.ofType?.name;

            return (
              <Box
                key={k}
                sx={wrapperDocsSection}
                // onClick={() => handlerOpenArgs(field)}
                onClick={() => {
                  if (fieldType) handlerOpenTypes(field, fieldType);
                }}
              >
                <Typography sx={schemaHeading} variant="h4">
                  {/* {`${field.name}: ${field.type.kind.toLowerCase()}`} */}
                  {`${field.name}(...): ${fieldType}`}
                </Typography>

                {field.args.length > 0 && (
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
          <Box sx={wrapperNextDocsSection}>
            <Typography sx={sectionHeading} variant="h4">
              {'TYPE DETAILS'}
            </Typography>

            <Typography sx={sectionSubHeading}>
              {currentFiled.description}
            </Typography>

            <Typography variant="subtitle1">{`type ${currentFiledType} {`}</Typography>

            {Object.values(types).map((type) => {
              if (type.name.startsWith('__') || type.kind !== 'OBJECT') {
                return null;
              }
              if (type.name === currentFiledType) {
                // console.log(type.name === currentFiledType);

                return type.fields.map((field: Field, k: number) => {
                  const fieldType =
                    field.type.kind !== 'NON_NULL'
                      ? field.type.name
                      : field.type.ofType?.ofType?.name;

                  return (
                    <Box
                      key={k}
                      sx={wrapperDocsSection}
                      // onClick={() => handlerOpenArgs(field)}
                      // onClick={() => {

                      //   if (fieldType) handlerOpenTypes(fieldType);
                      // }}
                    >
                      <Typography sx={schemaHeading} variant="h4">
                        {`${field.name}: ${fieldType}`}
                      </Typography>

                      {field.args.length > 0 && (
                        <IconButton>
                          <KeyboardArrowRightIcon />
                        </IconButton>
                      )}
                    </Box>
                  );
                });
              }
            })}
            <Typography variant="subtitle1">{`}`}</Typography>
          </Box>

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
                        arg.type.kind !== 'NON_NULL'
                          ? arg.type.name
                          : arg.type.ofType?.name;

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
