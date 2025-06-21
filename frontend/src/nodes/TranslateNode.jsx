import BaseNode from './Basenode';

const TranslateNode = ({ id }) => {
  return (
    <BaseNode
      label="Translate"
      inputHandles={[`${id}-text`]}
      outputHandles={[`${id}-translated`]}
    >
      <p style={{ fontSize: 12 }}>Simulates translating text.</p>
    </BaseNode>
  );
};

export default TranslateNode;
