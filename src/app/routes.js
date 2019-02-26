import createMatcher from 'feather-route-matcher';

import NotFoundPage from './pages/NotFoundPage';
import FrontPage from './pages/FrontPage';


export default createMatcher({
    '/': FrontPage,
    '/*': NotFoundPage
});