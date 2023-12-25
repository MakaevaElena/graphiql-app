import { Box, IconButton, Typography } from '@mui/material';
import {
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

const DocsSection: React.FC<DocsSectionProps> = ({ types }) => {
  // const [currentType, setCurrentType] = useState('');
  // const [activeDocsLink, setActiveDocsLink] = useState(false);
  // const [currentFiled, setCurrentField] = useState<Field>(
  //   DEFAULT_CURRENT_FIELD
  // );
  const [currentFiled, setCurrentField] = useState('');

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

  const handlerOpenTypes = (currentField: string) => {
    setCurrentField(currentField);
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
            {/* {'TYPE DETAILS'} */}
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
                  if (fieldType) handlerOpenTypes(fieldType);
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

      {currentFiled && (
        <Box sx={wrapperNextDocsSection}>
          <Typography sx={sectionHeading} variant="h4">
            {'TYPES'}
          </Typography>

          <Typography variant="subtitle1">{`type ${currentFiled} {`}</Typography>

          {Object.values(types).map((type) => {
            if (type.name.startsWith('__') || type.kind !== 'OBJECT') {
              return null;
            }
            if (type.name === currentFiled) {
              console.log(type.name === currentFiled);

              return type.fields.map((field: Field, k: number) => {
                // const fieldType =
                //   field.type.kind === 'OBJECT'
                //     ? field.type.name
                //     : field.type.ofType?.name;

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
                      {`${field.name}`}
                    </Typography>

                    {field.args.length > 0 && (
                      <IconButton>
                        <KeyboardArrowRightIcon />
                      </IconButton>
                    )}
                  </Box>
                );
              });

              // return (
              //   <Box
              //     key={i}
              //     onClick={() => handlerOpenField(type.name)}
              //     sx={activeDocsLink ? activeLink : null}
              //   >
              //     <Box sx={wrapperDocsSection}>
              //       <Typography sx={schemaTypes} variant="h4">
              //         {`${type.name}(...):`}
              //       </Typography>

              //       <IconButton>
              //         <KeyboardArrowRightIcon />
              //       </IconButton>
              //     </Box>
              //   </Box>
              // );
            }
          })}
          <Typography variant="subtitle1">{`}`}</Typography>
        </Box>
      )}

      {/* {currentFiled.args.length > 0 && (
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
      )} */}
    </Box>
  );
};

export default DocsSection;
