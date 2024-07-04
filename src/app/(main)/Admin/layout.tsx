
import OverlayAdminMenu from "@/components/menu/overlayAdminMenu";
import AdminMenu from "@/components/menu/adminMenu";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative">
      <OverlayAdminMenu/>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-x-4">
        <AdminMenu/>
       
       {children}
     
      </div>
    </div>
  );
};

export default layout;
