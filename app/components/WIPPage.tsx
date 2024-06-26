import '../styles/pages.css'

const WIPPage: React.FC<{pageTitle: string}> = ({ pageTitle }) => {

    return (
        <div>
            <h1 className="text-6xl">{pageTitle}</h1>
            <p className="my-12">
                this page is not yet ready, apologies {`<]:3`}
            </p>
        </div>
    )
}

export default WIPPage;