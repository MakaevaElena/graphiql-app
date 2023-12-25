import { Box, IconButton, Typography } from '@mui/material';
import {
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

type DocsSectionProps = {
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

const FieldsList: React.FC<DocsSectionProps> = ({
  currentFiledType,
  currentFiled,
  types,
}) => {
  return (
    <>
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
                    <Box key={k} sx={wrapperDocsSection}>
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
            <Typography variant="subtitle1" sx={exampleText}>{`}`}</Typography>
          </Box>
        </Box>
      )}
    </>
  );
};

export default FieldsList;
