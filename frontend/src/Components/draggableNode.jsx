// draggableNode.js

export const DraggableNode = ({ type, label }) => {
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType }
      event.target.style.cursor = 'grabbing';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };
  
    return (
      <div className={`cursor-grab min-w-[130px] h-[60px] rounded-md flex items-center justify-center flex-col text-white bg-gray-800 hover:bg-gray-700 shadow transition duration-200 ${type}`} draggable onDragStart={(event) => onDragStart(event, type)} onDragEnd={(event) => (event.target.style.cursor = 'grab')}>
        <span className="font-medium">{label}</span>
      </div>
    );
};
  