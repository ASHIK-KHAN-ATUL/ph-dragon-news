import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightNav from "../components/layout-component/RightNav";
import { FaArrowLeftLong } from "react-icons/fa6";


const NewsDetail = () => {

    const data = useLoaderData();
    const news = data.data[0];
    console.log(news)

    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className="w-11/12 mx-autto grid grid-cols-12 gap-5">
                <section className="col-span-8 ">
                    <h2 className="font-semibold mb-3 ">Draggon News</h2>
                    <div className="card bg-base-100 border-2 ">
                        <figure className="px-5 pt-5 md:px-10 md:pt-10">
                            <img
                            src={news.image_url}
                            alt="Shoes"
                            className="rounded-xl" />
                        </figure>
                        <div className="card-body p-3 md:p-8">
                            <h2 className="card-title">{news.title}</h2>
                            <p>{news.details}</p>
                            <div className="card-actions">
                            <Link to={`/category/${news?.category_id}`} className="btn text-white bg-[#D72050]"><FaArrowLeftLong></FaArrowLeftLong> All news in this category</Link>
                            </div>
                        </div>
                    </div>
                </section>

                <aside className="col-span-4 ">
                    <RightNav></RightNav>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetail;