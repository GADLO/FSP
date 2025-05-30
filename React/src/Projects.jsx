import ProjectFigure from "./components/ProjectFigure"

const Projects = () => {
    return (<section class="section-projects">

        <div class="container">
            <h2>Project I proud of</h2>
            <div class="topgrid">
                <ProjectFigure name='CarCheck' target={ '/car' } url={ 'https://www.changan.com.cn/qiyuan/staticImg/cars/Q07/screen2_1.jpg' } tech={ ['html', 'css', 'js'] } />
                <ProjectFigure name='test2' url={ 'https://images.unsplash.com/photo-1553964692-888ccdb8aa7c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGxhdHRlfGVufDB8fDB8fHww' } tech={ ['html', 'css', 'js'] } />
                <ProjectFigure name='test3' url={ 'https://images.unsplash.com/photo-1553964692-888ccdb8aa7c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGxhdHRlfGVufDB8fDB8fHww' } tech={ ['html', 'css', 'js'] } />
                <ProjectFigure name='test4' url={ 'https://images.unsplash.com/photo-1553964692-888ccdb8aa7c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGxhdHRlfGVufDB8fDB8fHww' } tech={ ['html', 'css', 'js'] } />
                <ProjectFigure name='test4' url={ 'https://images.unsplash.com/photo-1553964692-888ccdb8aa7c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGxhdHRlfGVufDB8fDB8fHww' } tech={ ['html', 'css', 'js'] } />
            </div>
            <div class="bottomgrid">
                <a href="">
                    <img src="https://images.unsplash.com/photo-1563258633-558dec1f915a?q=80&w=3912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="" />
                </a>
                <a href="">
                    <img src="https://images.unsplash.com/photo-1698516923132-b0236bc8f3ef?q=80&w=3822&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="" />
                </a>
                <a href="">
                    <img src="https://images.unsplash.com/photo-1698402178229-863420a8ecf6?q=80&w=3822&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="" />
                </a>
                <a href="">
                    <img src="https://images.unsplash.com/photo-1698586453442-b03506d193cb?q=80&w=3822&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="" />
                </a>
                <a href="">
                    <img src="https://images.unsplash.com/photo-1665302478277-8a7f22f80853?q=80&w=3822&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="" />
                </a>
            </div>

        </div>
    </section>)
}

export default Projects