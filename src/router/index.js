import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/page/Index'
import Index2 from '@/components/page/Index2'
import AboutUs from '@/components/page/AboutUs'
import ProjectDemo from '@/components/page/ProjectDemo'
import SourceSites from '@/components/page/SourceSites'
import Blogs from '@/components/page/Blogs'
import BlogDetail from '@/components/page/BlogDetail'
import Timer from '@/components/page/Timer'
//404 notfound
import NotFound from '@/components/common/NotFound'

Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "index2",
            component: Index2
        },
        {
            path: "/blogs",
            name: "blogs",
            component: Blogs
        },
        {
            path: "/blog/:id/detail",
            name: "articleDetail",
            component: BlogDetail
        },
        {
            path: "/about",
            name: "AboutUs",
            component: AboutUs
        },
        {
            path: "/project_demos",
            name: "ProjectDemo",
            component: ProjectDemo
        },
        {
            path: "/source",
            name: "SourceSites",
            component: SourceSites
        },
        {
            path: "/timer",
            name: "Timer",
            component: Timer
        },
        {
            path: '/*',
            component: NotFound
        }
    ]
});
