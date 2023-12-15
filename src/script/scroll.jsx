import { Helmet } from 'react-helmet';

function scroll() {
  return (
    <>
      <Helmet>
        <script src="path/to/some-script.js"></script>
      </Helmet>
      Some component content
    </>
  );
}