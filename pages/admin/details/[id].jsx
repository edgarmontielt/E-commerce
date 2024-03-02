import AdminLayout from "components/layouts/admin/Admin";
import { HeadComponent } from "components/utils/head";
import { useRouterQuery } from "hooks";
import DetailsToAdmin from "modules/admin/pages/details";

export default function DetailsProductAdmin() {
  const query = useRouterQuery("id");
  return (
    <>
      <HeadComponent title={"Product details"} />
      <DetailsToAdmin id={query} />
    </>
  );
}

DetailsProductAdmin.Layout = AdminLayout;
