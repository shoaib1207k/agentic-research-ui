import { FaArrowUp } from "react-icons/fa";

const ResearchTopicInput = () => {
    return (
        <div className="research-topic-input d-flex align-items-center justify-content-center gap-4 bg-light border-grey-300 col-md-6 m-auto p-2 rounded">
            <input
                id="research-topic"
                type="text"
                placeholder="Enter research topic e.g., Quantum Computing"
                className="border-0 bg-light rounded p-2 w-100  m-0"
            />
            <button className="bg-blue-500 text-white p-0 topic-submit hover:bg-blue-600">
                <FaArrowUp />
            </button>
        </div>
    )
}

export default ResearchTopicInput;