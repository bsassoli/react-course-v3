const Categories = ({ categories, callback }) => {
    const renderedCategories = categories.map((cat, index) => {
        return <button key={index}
            className="btn"
            onClick={()=>{callback(cat)}}>
                {cat}
            </button>
    })
    return <div className="btn-container">{renderedCategories}</div>
};
export default Categories;