import React, { useState } from "react";
import ResearchTopicInput from "./ResearchTopicInput";
import ResearchResult from "./ResearchResult";

const ResearchContainer = () => {
  const [results, setResults] = useState<Array<Record<string, unknown>>>([]);


  return (
    <div>
      <ResearchResult result={results} />
      <ResearchTopicInput onResult={setResults} />
    </div>
  );
};

export default ResearchContainer;
