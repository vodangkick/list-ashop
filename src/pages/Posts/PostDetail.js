import React from 'react'
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'
import BannerSecond from '../../components/sections/BannerSecond';
import { PostContext } from '../../contexts/PostProvider';
import SideBar from '../../layout/SideBar';
import ContainerPostDetail from '../../components/posts/Single/ContainerPostDetail';


export default class PostDetail extends React.Component {
    static contextType = PostContext;
    componentDidMount() {
        console.log('post detail component did mount')
    }
    render() {
        console.log('post detail rendering....');

        const { posts } = this.context;

        function getPostDetail(slug) {
            let product = posts.find(item => item.slug === slug);
            return product;
        }
        let product = getPostDetail(this.props.match.params.slug);
        return (
            <>
                <Header />
                <BannerSecond title={product.name} link={`/blog/${product.slug}`} />
                <section className="blog_area">
                    <div className="container">
                        <div className="row">
                            <ContainerPostDetail item={product} />
                            <SideBar />
                        </div>
                    </div>
                </section>

                <Footer />
            </>
        )
    }
}
