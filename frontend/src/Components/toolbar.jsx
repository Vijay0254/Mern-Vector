// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
    return (
        <div className="w-full px-4 pt-4">
            <div className="flex flex-wrap gap-10 bg-white border border-gray-300 rounded-lg shadow p-4">
                <DraggableNode type="customInput" label="🔌 Input" />
                <DraggableNode type="llm" label="🧠 LLM" />
                <DraggableNode type="customOutput" label="📤 Output" />
                <DraggableNode type="text" label="📝 Text" />
            </div>
        </div>
    );
};

