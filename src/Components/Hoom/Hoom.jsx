import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList.jsx/CategoryList";
import FeaturesJobs from "../FeaturesJobs/FeaturesJobs";
import { Helmet } from 'react-helmet-async';


const Hoom = () => {
    return (
        <div>
            <Helmet>
                <title>Career Hub | Home</title>
            </Helmet>
            <Banner></Banner>
            <CategoryList></CategoryList>
            <FeaturesJobs></FeaturesJobs>
        </div>
    );
};

export default Hoom;