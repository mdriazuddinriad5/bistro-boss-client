import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css';

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle
                subHeading={'Check it out'}
                heading={'from our menu'}
            >
            </SectionTitle>

            <div className="md:flex justify-center items-center bg-opacity-60 bg-slate-500 py-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 25, 2096</p>
                    <p className="uppercase">Where can I get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas corrupti dolorum, amet eum enim voluptate animi, voluptas nobis dicta iusto, impedit repellendus quasi modi eius eveniet. Tempore asperiores repellat placeat deleniti velit vitae ex repellendus cumque quod dolorem, sapiente necessitatibus dicta quidem impedit molestiae fugit earum corrupti pariatur sit voluptates!</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;