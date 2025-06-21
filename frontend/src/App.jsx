import { PipelineToolbar } from './Components/toolbar';
import { PipelineUI } from './Components/ui';
import { SubmitButton } from './Components/submit';

function App() {
  return (
    <div className="flex flex-col gap-4 py-4 bg-gray-100 min-h-screen">
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton />
    </div>
  );
}

export default App;
