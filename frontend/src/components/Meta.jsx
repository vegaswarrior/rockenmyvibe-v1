import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Rocken My Vibe',
  description: 'Designing Style so you dont have to',
  keywords: 't-shirts, hoodies, hats, beenies, sweatshirts, coffee mugs, water bottles, tumblers, pillows, towels, umbrellas',
};

export default Meta;
