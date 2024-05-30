import '../../styles/pages.css'

const AboutGrid: React.FC<{}> = () => {
    return (
        <section className="grid grid-rows-3 grid-cols-3 grid-flow-col aspect-16-9 gap-4 px-6">
            <div className="bg-th-tertiary">
                1
            </div>
            <div className="bg-th-tertiary">
                4
            </div>
            <div className="bg-th-tertiary">
                7
            </div>
            <div className="bg-th-tertiary">
                2
            </div>
            <div className="bg-th-tertiary">
                5
            </div>
            <div className="bg-th-tertiary">
                8
            </div>
            <div className="bg-th-tertiary">
                3
            </div>
            <div className="bg-th-tertiary">
                6
            </div>
            <div className="bg-th-tertiary">
                9
            </div>
        </section>
    );
}

export default AboutGrid;