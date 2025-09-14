import axios from "axios";

const ResearchService = {

    submitResearchTopic: async (topic: string) => {

        const response = await axios.post("/api/research-topic", null, { params: { topic } });
        return response.data;
    
    },
};

export default ResearchService;
