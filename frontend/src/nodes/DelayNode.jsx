import BaseNode from './Basenode';

const DelayNode = ({ id }) => {
  return (
    <BaseNode
      label="Delay"
      inputHandles={[`${id}-input`]}
      outputHandles={[`${id}-delayed`]}
    >
      <p style={{ fontSize: 12 }}>Simulates a delay in the pipeline.</p>
    </BaseNode>
  );
};

export default DelayNode;
