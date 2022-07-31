import Header from '~/layouts/components/Header';

function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div className="content">
                <h2>Upload page</h2>
            </div>
        </div>
    );
}

export default HeaderOnly;
