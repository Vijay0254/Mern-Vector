import React, { useState } from 'react'
import BaseNode from './Basenode';

const IONode = ({ id, data, nodeType }) => {

    const isInput = nodeType === 'input';
    const label = isInput ? 'Input' : 'Output';

    const [currName, setCurrName] = useState(data?.[isInput ? 'inputName' : 'outputName'] || id.replace(`custom${isInput ? 'Input' : 'Output'}-`, `${nodeType}_`));
    const [type, setType] = useState(data?.[isInput ? 'inputType' : 'outputType'] || 'Text');

    
    const handles = isInput ? { outputHandles: [`${id}-value`] } : { inputHandles: [`${id}-value`] };

    return (
        <BaseNode label={label} {...handles}>
            <div className="flex flex-col gap-2 mt-2 text-sm">
                <label className="text-gray-600">
                    Name:
                    <input type="text" value={currName} onChange={(e) => setCurrName(e.target.value)} className="mt-1 w-full px-2 py-1 border border-gray-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" />
                </label>

                <label className="text-gray-600">
                    Type:
                    <select value={type} onChange={(e) => setType(e.target.value)} className="mt-1 w-full px-2 py-1 border border-gray-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm">
                        <option value="Text">Text</option>
                        {isInput && <option value="File">File</option>}
                        {!isInput && <option value="Image">Image</option>}
                    </select>
                </label>
            </div>
        </BaseNode>
    )
}

export default IONode