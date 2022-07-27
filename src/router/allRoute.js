import Home from '../views/Home/Home';
import Explore from '../views/Explore/Explore';
import SavedBookList from '../views/Saved/SavedBook';
import Learn from '../views/LearnScreen/Learn';
import Earn from '../views/EarnScreen/Earn';
import Live from '../views/LiveScreen/Live';
import Profile from '../views/Profile/Profile';
import EditProfile from '../views/EditProfileScreen/EditProfile';

const allRoutes = [
    {path: "/", component:Home},
    {path: "/explore", component:Explore},
    {path: "/saved_booklist", component:SavedBookList},
    {path: "/profile", component:Profile},
    {path: "/live", component:Live},
    {path: "/learn", component:Learn},
    {path: "/earn", component:Earn},
    {path: "/edit_profile", component:EditProfile}
]

export default allRoutes;