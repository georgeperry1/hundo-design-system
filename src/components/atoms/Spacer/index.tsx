import { SpacerElement } from './styled';

export type SpacerProps = {
  w?: number;
  h?: number;
  inline?: boolean;
};

const Spacer: React.FC<SpacerProps> = (props) => {
  return <SpacerElement {...props} />;
};

export default Spacer;
