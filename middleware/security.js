export default function ({ app, redirect, route }) {
  const isLoggedIn = app.store.getters["auth/isLoggedIn"];
  const isPasswordChanged = app.store.getters["auth/isPasswordChanged"];
  const public_routes = ["/", "/login"];

  console.log(isLoggedIn);
  if (!public_routes.includes(route.path) && !isLoggedIn) {
    redirect("/login");
    return;
  }

  if (route.path === "/login" && isLoggedIn) {
    redirect("/dashboard");
    return;
  }

  if (isLoggedIn && !isPasswordChanged && route.path !== "/change-password") {
    redirect("/change-password");
    return;
  }

  if (isLoggedIn && isPasswordChanged && route.path === "/change-password") {
    redirect("/dashboard");
    return;
  }
}
