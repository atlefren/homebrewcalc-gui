import createMatcher from 'feather-route-matcher';

import NotFoundPage from './pages/NotFoundPage';
import FrontPage from './pages/FrontPage';
import BrewPage from './pages/BrewPage';

export default createMatcher({
    '/': FrontPage,
    '/brews(/)': FrontPage,
    '/brews/:id': BrewPage,
    '/*': NotFoundPage,
});