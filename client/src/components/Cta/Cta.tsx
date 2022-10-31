import { Button, Link } from '@mui/material';

type CtaProps = {
  inner: string;
  route: string;
};

function Cta({ inner, route }: CtaProps) {
  return (
    <>
      <Button
        className="mainBtn checkout"
        sx={{
          color: 'var(--darkest-grey)',
          border: '1px solid var(--dark-grey)',
          backgroundColor: 'var(--cta-color)',
          '&:hover': { backgroundColor: 'var(--dark-color)' },
        }}
        variant="contained"
        color="info"
      >
        <Link
          href={'../../' + route}
          underline="none"
          sx={{
            color: 'var(--darkest-grey)',
          }}
        >
          {inner}
        </Link>
      </Button>
    </>
  );
}

export default Cta;
