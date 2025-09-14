const ResearchResult = ({ result }: { result: Array<Record<string, unknown>> }) => {
  const writerObj = result.find((item) => "writer" in item) as
    | { writer: { writing_results: string } }
    | undefined;

  const writingResult = writerObj?.writer?.writing_results ?? "No result yet";

  return (
    <div className="research-result border border-gray-300 rounded p-4 my-4 text-left bg-white shadow-sm">
      <h4 className="font-semibold mb-2">Writer's Result:</h4>
      <p className="text-gray-700 text-start whitespace-pre-wrap">{writingResult}</p>
    </div>
  );
};

export default ResearchResult;
