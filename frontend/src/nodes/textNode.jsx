import { useState, useEffect, useRef } from 'react';
import BaseNode from './Basenode';
import { useStore } from '../Store/store';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);
  const textareaRef = useRef(null);
  const updateNodeField = useStore((state) => state.updateNodeField);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [currText]);

  useEffect(() => {
    const matches = [...currText.matchAll(/\{\{\s*([a-zA-Z_$][\w$]*)\s*\}\}/g)];
    const extracted = matches.map((m) => m[1].trim());
    setVariables([...new Set(extracted)]); 
  }, [currText]);

  useEffect(() => {
    updateNodeField(id, 'text', currText);
  }, [currText]);

  return (
    <BaseNode label="Text" inputHandles={variables} outputHandles={[`${id}-output`]} >
      <textarea ref={textareaRef} value={currText} onChange={(e) => setCurrText(e.target.value)} rows={1} placeholder="Type something like {{input}} or {{userName}}" style={{ width: '100%', resize: 'none', overflow: 'hidden', fontSize: 14, padding: 6, borderRadius: 4, border: '1px solid #ccc', fontFamily: 'monospace' }} />
    </BaseNode>
  );
};
