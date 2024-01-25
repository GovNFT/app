import Footer from "./components/Footer";
import Header from "./components/Header";

export default function NotFound({ children = null }) {
  return (
    <div className="container mx-auto px-4 lg:px-8">
      {/* @ts-ignore */}
      <Header />

      <div className="mx-auto flex flex-col items-center my-36">
        <div className="text-base sm:text-xl mb-4 text-center">
          Something went wrong...
        </div>
        <div className="sm:w-96 mb-12 text-sm text-center">
          {children || (
            <div>
              If reloading the page doesn't work, please try again in a few
              minutes.
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
