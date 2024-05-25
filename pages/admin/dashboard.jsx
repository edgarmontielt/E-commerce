import AdminLayout from "components/layouts/admin/Admin";
import { HeadComponent } from "components/utils/head";
import { URL } from "config";
import { AUTH_CONSTANTS } from "config/constants";
import DashboardAdminModule from "modules/admin/pages/dashboard";

export default function Dashboard({ user }) {
  return (
    <>
      <HeadComponent title={"Dashboard"} />
      <DashboardAdminModule user={user} />
    </>
  );
}

// TODO: Valitade role in admin pages
export async function getServerSideProps({ req }) {
  const cookies = req.headers.cookie;
  console.log("🚀 ~ getServerSideProps ~ cookies:", cookies);

  if (!cookies) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const res = await fetch(`${URL}${AUTH_CONSTANTS.validation}`, {
    credentials: "include",
    headers: {
      Cookie: cookies,
    },
  });
  const data = await res.json();

  if (!data.success) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return { props: { user: data.user } };
}

Dashboard.Layout = AdminLayout;
