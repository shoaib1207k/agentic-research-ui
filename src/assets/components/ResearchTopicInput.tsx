import { FaArrowUp } from "react-icons/fa";
import ResearchService from "../../Services/ResearchService";
import React from "react";

const ResearchTopicInput = ({ onResult }: { onResult: (result: Array<Record<string, unknown>>) => void }) => {

    const [topic, setTopic] = React.useState("");

    const handleSubmit = () => {
        // Handle the submission of the research topic
        ResearchService.submitResearchTopic(topic)
            .then((data) => {
                console.log("Research topic submitted:", data);
                setTopic("");
                onResult(data);
            })
            .catch((error) => {
                console.error("Error submitting research topic:", error);
            });
    }

    return (
        <div className="research-topic-input d-flex align-items-center justify-content-center gap-4 bg-light border-grey-300 col-md-6 m-auto p-2 rounded">
            <input
                id="research-topic"
                type="text"
                placeholder="Enter research topic e.g., Quantum Computing"
                className="border-0 bg-light text-dark rounded p-2 w-100  m-0"
                onChange={(e) => setTopic(e.target.value)}
            />
            <button onClick={handleSubmit} className="text-white p-0 topic-submit">
                <FaArrowUp />
            </button>
        </div>
    )
}

export default ResearchTopicInput;