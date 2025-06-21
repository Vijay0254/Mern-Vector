import BaseNode from './Basenode';

const ConditionNode = ({ id }) => {
  return (
    <BaseNode
      label="Condition"
      inputHandles={[`${id}-condition`, `${id}-value`]}
      outputHandles={[`${id}-true`, `${id}-false`]}
    >
      <p style={{ fontSize: 12 }}>Outputs true/false based on condition.</p>
    </BaseNode>
  );
};

export default ConditionNode;
