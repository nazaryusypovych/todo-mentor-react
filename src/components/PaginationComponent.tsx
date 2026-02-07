

const PaginationComponent = ({onPageChange}) => {
    return (
        <div>

            <ul style={{display: "flex", listStyle: "none", gap: "30px"}}>
                <li onClick={()=>{onPageChange(1)}}>1</li>
                <li onClick={()=>{onPageChange(2)}}>2</li>
                <li onClick={()=>{onPageChange(3)}}>3</li>
            </ul>

        </div>
    );
};

export default PaginationComponent;