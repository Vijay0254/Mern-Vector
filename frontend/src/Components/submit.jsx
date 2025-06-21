// submit.js
import { Loader2, Send } from 'lucide-react';
import axios from 'axios';
import { useStore } from '../Store/store';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

export const SubmitButton = () => {

    const nodes = useStore((state) => state.nodes);
    const edges = useStore((state) => state.edges);

    const [loading, setLoading] = useState(false)

    async function submitPipeline(){
        setLoading(true);
        if(nodes.length === 0 || edges.length === 0){
            toast.error("Please add nodes and edges to the pipeline before submitting.");
            setLoading(false);
            return;
        }
        try{
            const response = await axios.post(`http://localhost:8000/pipelines/parse`, {nodes, edges})
            if(response.data.success){
                toast.success(`Nodes: ${response.data.num_nodes} | Edges: ${response.data.num_edges} | DAG: ${response.data.is_dag ? 'Yes' : 'No'}`);
            }
            else{
                toast.error(`${response.data.error || "Pipeline parsing failed."}`);
            }
        } 
        catch(error){
            console.log(`Error in Submit Pipeline: ${error.message}`);
            toast.error("Submission failed. Check your connection .");
        }
        finally{
            setLoading(false);
        }
    }

    return (
        <div className="flex items-center justify-center mt-4">
            <button onClick={() =>submitPipeline()} type="submit" className="bg-blue-600 text-lg flex items-center justify-center gap-x-3 cursor-pointer hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg shadow transition-all duration-200">
                {loading ? <><Loader2 className='animate-spin size-5' /> Loading...</> : <><Send size={18} /> Submit</>}
            </button>
        </div>
    );
}
