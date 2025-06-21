// llmNode.js

import BaseNode from './Basenode';

export const LLMNode = ({ id, data }) => {

  return (
    <BaseNode label="LLM" inputHandles={[`${id}-system`, `${id}-prompt`]} outputHandles={[`${id}-response`]}>
      <div style={{ fontSize: 12 }}>
        <p>This is a Large Language Model node.</p>
        <p>Input: system + prompt → Response</p>
      </div>
    </BaseNode>
  );
}
