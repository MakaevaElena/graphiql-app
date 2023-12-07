import { Avatar, Box, Link, Typography, useMediaQuery } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

type DevCardProps = {
  name: string;
  bio: string;
  location: string;
  imgSrc: string;
  contribution: string;
  gitHub: string;
};

function DevCard({
  name,
  bio,
  location,
  imgSrc,
  gitHub,
  contribution,
}: DevCardProps) {
  const MobileM = useMediaQuery('(min-width:600px)');

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: MobileM ? 'row' : 'column',
        gap: 2,
        p: 2,
        borderRadius: 4,
        transition: '0.3s',
        bgcolor: '#333',
        '&:hover': {
          bgcolor: '#444',
        },
      }}
    >
      <Avatar
        alt="Dev Name"
        src={imgSrc}
        sx={{
          width: 120,
          height: 120,
          borderRadius: 4,
          alignSelf: MobileM ? 'flex-start' : 'center',
        }}
      />
      <Box sx={{ pt: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'end' }}>
          <Typography
            variant="h5"
            sx={{ fontStyle: 'normal', lineHeight: 1.5 }}
          >
            {name}
          </Typography>
          <Link href={gitHub} target="_blank">
            <GitHubIcon sx={{ color: '#eee' }} />
          </Link>
        </Box>
        <Typography sx={{ fontStyle: 'normal' }}>{bio}</Typography>
        <Typography sx={{ fontStyle: 'normal' }}>
          Location: {location}
        </Typography>
        <Typography sx={{ fontStyle: 'normal' }}>
          Contribution: {contribution}
        </Typography>
      </Box>
    </Box>
  );
}

export default DevCard;
