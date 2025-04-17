import SyntaxHighlighter from "react-syntax-highlighter";

const HighlightedCode = ({ children, language }) => {
  return (
    <SyntaxHighlighter language={language}>
      {children}
    </SyntaxHighlighter>
  );
};

export default HighlightedCode;
