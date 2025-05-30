const ProjectFigure = (props) => {


    return (
        <figure>
            <a href={ props.target }>
                <img src={ props.url }
                    alt="" />
            </a>
            <figcaption>
                <h3>{ props.name }</h3>
                <ul>
                    { props.tech.map((item) => {
                        return <li>{ item }</li>
                    }) }
                </ul>
            </figcaption>
        </figure>
    )
}


export default ProjectFigure;