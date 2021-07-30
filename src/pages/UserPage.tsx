import { Header } from '../components/Header/Header';
import HeaderSearch from '../components/HeaderSearch/HeaderSearch';
import User from '../components/User/User';

export const UserPage = () => {
  return ( <>
    <Header>
      <HeaderSearch />
    </Header>
    <User />
  </> );
}