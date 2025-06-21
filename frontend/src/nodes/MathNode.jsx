import BaseNode from './Basenode';

const MathNode = ({ id }) => {
  return (
    <BaseNode label="Math" inputHandles={[`${id}-a`, `${id}-b`]} outputHandles={[`${id}-result`]}>
      <p style={{ fontSize: 12 }}>Adds two numbers together.</p>
    </BaseNode>
  );
};

export default MathNode;
