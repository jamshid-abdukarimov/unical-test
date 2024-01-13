import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="relative z-10 bg-primary py-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[400px] text-center">
              <h2 className="mb-2 text-[50px] font-bold leading-none text-slate-600 sm:text-[80px] md:text-[100px]">
                404
              </h2>
              <h4 className="mb-3 text-[22px] font-semibold leading-tight text-slate-600">
                Oops! That page can’t be found
              </h4>
              <p className="mb-8 text-lg text-slate-600">
                The page you are looking for it maybe deleted
              </p>
              <Link
                to="/"
                className="inline-block rounded-lg border border-slate-600 px-8 py-3 text-center text-base font-semibold text-slate-600 transition hover:bg-slate-600 hover:text-white"
              >
                Go To Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
