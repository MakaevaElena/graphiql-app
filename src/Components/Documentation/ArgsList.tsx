import { Box, Typography } from '@mui/material';
import {
  schemaHeading,
  sectionHeading,
  wrapperDocsSection,
  wrapperNextDocsSection,
} from './styles';
import { Field } from '../../common-types/schema.types';

type ArgsListProps = {
  currentFiled: Field;
};

const ArgsList: React.FC<ArgsListProps> = ({ currentFiled }) => {
  return (
    <>
      {currentFiled.args.length > 0 && (
        <Box sx={wrapperNextDocsSection}>
          <Typography sx={sectionHeading} variant="h4">
            {'ARGUMENTS'}
          </Typography>
          {currentFiled.hasOwnProperty('args') && currentFiled.args.length > 0
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
    </>
  );
};

export default ArgsList;
