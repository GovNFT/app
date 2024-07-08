export default {
  h1: (props) => <h1 className="mb-6 font-bold text-center text-3xl text-gray-600 dark:text-white" {...props} />,
  h2: (props) => <h2 className="mb-2 mt-6 font-bold text-2xl text-gray-600 dark:text-white" {...props} />,
  h3: (props) => (
    <h3
      className="mb-8 mt-6 font-bold text-xl text-gray-600 dark:text-white py-5 border-b border-black/90 dark:border-white/20"
      {...props}
    />
  ),
  h4: (props) => <h4 className="mb-3 mt-6 font-bold text-gray-600 dark:text-white" {...props} />,
  p: (props) => <p className="mb-4" {...props} />,
  ul: (props) => <ul className="mb-4 list-inside list-disc" {...props} />,
  ol: (props) => <ol className="mb-4 list-inside list-decimal" {...props} />,
  blockquote: (props) => (
    <blockquote className="my-4 border-l italic opacity-70 pl-4 text-gray-600 dark:text-white" {...props} />
  ),
};
