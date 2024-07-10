// src/config/routes.js
import { Home, About, Projects, Services, News, Contacts, Faq, Team, NotFound } from '../pages';

const routes = [
    {
        path: '/gttechandco',
        component: Home,
        exact: true,
    },
    {
        path: '/gttechandco/about',
        component: About,
    },
    {
        path: '/gttechandco/contact',
        component: Contacts,
    },
    {
        path: '/gttechandco/projects',
        component: Projects,
    },
    {
        path: '/gttechandco/services',
        component: Services,
    },
    {
        path: '/gttechandco/news',
        component: News,
    },
    {
        path: '/gttechandco/faq',
        component: Faq,
    },
    {
        path: '/team_members',
        component: Team,
    },
    {
        path: '*',
        component: NotFound,
    },
];

export default routes;
