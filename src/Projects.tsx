import SpanningTree from "./assets/spanning-tree.jpeg"

const SpanningTreeMaze = () => {
    return (
        <div>
            <h2>Spanning Tree Maze</h2>
            <p>Insert Description Here</p>
            <img src={SpanningTree} alt="Spanning Tree Maze"></img>
        </div>
    )
}

const LinuxShell = () => {
    return (
        <div>
            <h2>Linux Shell</h2>
            <p>Insert Description Here</p>
        </div>
    )
}

const Projects = () => {
    return (
        <div>
            <h1>Michael's Projects</h1>
            <SpanningTreeMaze />
            <LinuxShell />
        </div>
    )
}

export default Projects
