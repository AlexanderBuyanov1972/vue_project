import Main from '@/pages/Main'
import Posts from '@/pages/Posts'
import About from '@/pages/About'
import Post from '@/pages/Post'
import PostWithStore from '@/pages/PostWithStore'
import PostsWithCompositionAPI from '@/pages/PostsWithCompositionAPI'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts',
        component: Posts
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/posts/:id',
        component: Post
    },
    {
        path: '/store',
        component: PostWithStore
    },
    {
        path: '/composition',
        component: PostsWithCompositionAPI
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router