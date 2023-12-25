import { Box, IconButton, Typography } from '@mui/material';
import {
  activePoint,
  exampleText,
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
import { DEFAULT_CURRENT_FIELD } from './constant';
import ArgsList from './ArgsList';

type FieldsListProps = {
  currentFiledType: string;
  currentFiled: Field;
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

const FieldsList: React.FC<FieldsListProps> = ({
  currentFiledType,
  currentFiled,
  types,
}) => {
  const [activeDocsLink, setActiveDocsLink] = useState('');
  const [currentNextFiled, setCurrentField] = useState<Field>(
    DEFAULT_CURRENT_FIELD
  );
  const [currentNextFiledType, setCurrentNextFieldType] = useState('');

  const handlerOpenTypes = (field: Field, currentNextFieldType: string) => {
    setCurrentNextFieldType(currentNextFieldType);
    setCurrentField(field);
    setActiveDocsLink(field.name);
  };

  return (
    <Box sx={wrapperDocsSection}>
      {currentFiledType && (
        <Box sx={flexColumnCenter}>
          <Box sx={wrapperNextDocsSection}>
            <Typography sx={sectionHeading} variant="h4">
              {'TYPE DETAILS'}
            </Typography>

            <Typography sx={sectionSubHeading}>
              {currentFiled.description}
            </Typography>

            <Typography
              variant="subtitle1"
              sx={exampleText}
            >{`type ${currentFiledType} {`}</Typography>

            {Object.values(types).map((type) => {
              if (type.name.startsWith('__') || type.kind !== 'OBJECT') {
                return null;
              }
              if (type.name === currentFiledType) {
                return type.fields.map((field: Field, k: number) => {
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
                      onClick={() => {
                        if (fieldType) handlerOpenTypes(field, fieldType);
                      }}
                    >
                      <Typography sx={schemaHeading} variant="h4">
                        {`${field.name}: ${fieldType}`}
                      </Typography>

                      {(field.args.length > 0 || fieldType) && (
                        <IconButton>
                          <KeyboardArrowRightIcon />
                        </IconButton>
                      )}
                    </Box>
                  );
                });
              }
            })}
            <Typography variant="subtitle1" sx={exampleText}>{`}`}</Typography>
          </Box>
        </Box>
      )}

      {currentNextFiledType && (
        <Box sx={flexColumnCenter}>
          <FieldsList
            currentFiledType={currentNextFiledType}
            currentFiled={currentNextFiled}
            types={types}
          />

          <ArgsList currentFiled={currentNextFiled} />
        </Box>
      )}
    </Box>
  );
};

export default FieldsList;
