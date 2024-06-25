
import '../../styles/pages.css'
// import '../../styles/artPage.css'

const ArtsGrid: React.FC<{}> = () => {

    return (
        <div className="grid grid-cols-2 grid-rows-2 gap-12 w-full p-12 grid-things">
            <div className="bg-th-foreground w-auto h-80"></div>
            <div className="bg-th-foreground w-auto h-80"></div>
            <div className="bg-th-foreground w-auto h-80"></div>
            <div className="bg-th-foreground w-auto h-80"></div>
        </div>
    )
}

export default ArtsGrid;