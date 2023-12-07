import { Avatar, Box, Link, Typography } from '@mui/material';
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
  return (
    <Box
      sx={{
        display: 'flex',
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
        sx={{ width: 100, height: 100, borderRadius: 4 }}
      />
      <Box sx={{ pt: 1 }}>
        <Typography variant="h5" sx={{ fontStyle: 'normal' }}>
          {name}
        </Typography>
        <Typography sx={{ fontStyle: 'normal' }}>{bio}</Typography>
        <Typography sx={{ fontStyle: 'normal' }}>
          Location: {location}
        </Typography>
        <Typography sx={{ fontStyle: 'normal' }}>
          Contribution: {contribution}
        </Typography>
        <Link href={gitHub} target="_blank">
          <GitHubIcon sx={{ color: '#eee' }} />
        </Link>
      </Box>
    </Box>
  );
}

export default DevCard;
