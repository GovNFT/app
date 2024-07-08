export default {
  h1: (props) => <h1 className="mb-6 font-bold text-3xl" {...props} />,
  h2: (props) => <h2 className="mb-2 mt-12 font-bold text-2xl" {...props} />,
  h3: (props) => (
    <h3 className="mb-6 mt-6 font-bold text-xl py-4 border-b border-gray-900/10 dark:border-white/20" {...props} />
  ),
  h4: (props) => <h4 className="mb-3 mt-6 font-bold text-lg" {...props} />,
  p: (props) => <p className="mb-4" {...props} />,
  ul: (props) => <ul className="mb-4 list-inside list-disc" {...props} />,
  ol: (props) => <ol className="mb-4 list-inside list-decimal" {...props} />,
  blockquote: (props) => <blockquote className="my-4 border-l italic opacity-70 pl-4" {...props} />,
};
