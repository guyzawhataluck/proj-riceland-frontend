import DashboardLayout from "@/views/Layout/DashboardLayout.vue";
import AuthLayout from "@/views/Pages/AuthLayout.vue";

import NotFound from "@/views/NotFoundPage.vue";

const routes = [
  {
    path: "/",
    redirect: { name: 'customer lists' },
    component: DashboardLayout,
    children: [
      {
        path: "/customerlist",
        name: "customer lists",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "demo" */ "../views/CustomerList.vue")
      },
      {
        path: "/products",
        name: "Our Products",
        component: () =>
          import(/* webpackChunkName: "demo" */ "../views/Products.vue")
      },
      {
        path: "/addproducts",
        name: "Add Product",
        component: () =>
          import(/* webpackChunkName: "demo" */ "../views/Redirectpage/AddProducts.vue")
      },
      {
        path: "/relatedproducts",
        name: "Our Related Products",
        component: () =>
          import(/* webpackChunkName: "demo" */ "../views/RelatedProduct.vue")
      },
      {
        path: "/addrelatedproducts",
        name: "Add Our Related Product",
        component: () =>
          import(/* webpackChunkName: "demo" */ "../views/Redirectpage/AddRelatedProducts.vue")
      },
      {
        path: "/brands",
        name: "Our Brands",
        component: () =>
          import(
            /* webpackChunkName: "demo" */ "../views/Brands.vue"
          )
      },
      {
        path: "/addourbrands",
        name: "Add Our Brands",
        component: () =>
          import(
            /* webpackChunkName: "demo" */ "../views/Redirectpage/AddOurBrands.vue"
          )
      },
      {
        path: "/settingbrands",
        name: "Setting Brands",
        component: () =>
          import(/* webpackChunkName: "demo" */ "../views/SettingBrands.vue")
      },
      {
        path: "/addbrands",
        name: "Add Brand",
        component: () =>
          import(
            /* webpackChunkName: "demo" */ "../views/Redirectpage/AddBrands.vue"
          )
      },
      {
        path: "/news",
        name: "News & CSR",
        component: () =>
          import(/* webpackChunkName: "demo" */ "../views/News.vue")
      },
      {
        path: "/newspost",
        name: "Create New Post",
        component: () =>
          import(
            /* webpackChunkName: "demo" */ "../views/Redirectpage/NewPost.vue"
          )
      },
      {
        path: "/editNewspost/:id",
        name: "Edit News",
        component: () =>
          import(
            /* webpackChunkName: "demo" */ "../views/Redirectpage/EditNews.vue"
          )
      },
      {
        path: "/editBrand/:id",
        name: "Edit Brand",
        component: () =>
          import(
            /* webpackChunkName: "demo" */ "../views/Redirectpage/EditBrands.vue"
          )
      },
    ]
  },
  {
    path: "/",
    redirect: "login",
    component: AuthLayout,
    children: [
      {
        path: "/login",
        name: "login",
        component: () =>
          import(/* webpackChunkName: "demo" */ "../views/Pages/Login.vue")
      },
      {
        path: "/register",
        name: "register",
        component: () =>
          import(/* webpackChunkName: "demo" */ "../views/Pages/Register.vue")
      },
      { path: "*", component: NotFound }
    ]
  }
];

export default routes;
