import UniversalSearchPage from '../pages/UniversalSearchPage';
import FAQsPage from '../pages/FAQsPage';
import { universalResultsConfig } from './universalResultsConfig';
import LocationsPage from '../pages/LocationsPage'; 
import MenuItem from '../pages/menuItem';

export const routeConfig = [
  {
    path: '/',
    exact: true,
    page: <UniversalSearchPage universalResultsConfig={universalResultsConfig} />
  },
  {
    path: '/locations',
    page: <LocationsPage verticalKey="locations" />
  },
  {
    path: '/faqs',
    page: <FAQsPage verticalKey='faqs'/>
  },
  {
    path: '/menuitem',
    page: <MenuItem verticalKey='menuitem'/>
  },
];