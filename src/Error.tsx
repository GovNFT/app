import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Error({ children = null }) {
  return (
    <>
      <Header />

      <div className="mx-auto flex flex-col items-center my-36">
        <div className="text-base sm:text-xl mb-4 text-center">
          Something went wrong...
        </div>
        <p className="sm:w-96 mb-12 text-sm text-center">
          {children || (
            <>
              If reloading the page doesn't work, please try again in a few
              minutes.
            </>
          )}
        </p>
      </div>

      <Footer />
    </>
  );
}
