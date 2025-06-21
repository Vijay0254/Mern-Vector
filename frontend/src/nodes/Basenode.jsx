import React from 'react';
import { Handle, Position } from 'reactflow';

const BaseNode = ({ label, inputHandles = [], outputHandles = [], children }) => {
    return (
        <div className="bg-white border border-gray-300 rounded-lg shadow-sm p-4 min-w-[160px] relative">
            <strong className="block text-blue-600 font-medium text-sm mb-2">{label}</strong>
            <div className="text-sm">{children}</div>

            {inputHandles.map((id, idx) => (
                <Handle key={id} type="target" position={Position.Left} id={id} style={{ top: 40 + idx * 20 }} />
            ))}

            {outputHandles.map((id, idx) => (
                <Handle key={id} type="source" position={Position.Right} id={id} style={{ top: 40 + idx * 20 }} />
            ))}
        </div>
    );
};

export default BaseNode;