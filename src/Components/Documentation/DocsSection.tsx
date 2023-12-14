import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { schemaHeading, schemaTypes } from './styles';

type DocsSectionProps = {
  heading: string;
  names: string[];
};

const DocsSection: React.FC<DocsSectionProps> = ({ heading, names }) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography sx={schemaHeading} variant="h4">
          {heading}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        {names && (
          <div>
            {Object.values(names).map((name) => {
              return (
                <div key={name}>
                  {/* <Link href="#">{name}</Link> */}
                  <Typography sx={schemaTypes} variant="h4">
                    {name}
                  </Typography>
                </div>
              );
            })}
          </div>
        )}
      </AccordionDetails>
    </Accordion>
  );
};

export default DocsSection;
