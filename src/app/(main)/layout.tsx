import MiddleNavbar from "@/components/navbar/middleNavbar";
import Footer from "@/components/footer/footer";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <MiddleNavbar/>
      <div className="xl:mx-10 lg:mx-10 md:mx-5 sm:mx-5 mx-3">{children}</div>
      <Footer />
    </main>
  );
};

export default layout;
