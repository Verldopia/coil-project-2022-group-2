import { Button, Link } from '@mui/material';

type CtaProps = {
  inner: string;
  route: string;
};

function Cta({ inner, route }: CtaProps) {
  const baseUrl = window.location.origin;
  return (
    <>
      <Button
        id="step-2"
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
          href={baseUrl + '/' + route}
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
