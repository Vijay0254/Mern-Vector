import BaseNode from './Basenode';

const PromptTemplateNode = ({ id }) => {
  return (
    <BaseNode label="Prompt Template" inputHandles={[`${id}-input`]} outputHandles={[`${id}-prompt`]}>
      <p style={{ fontSize: 12 }}>Formats text into a prompt template.</p>
    </BaseNode>
  );
};

export default PromptTemplateNode;
