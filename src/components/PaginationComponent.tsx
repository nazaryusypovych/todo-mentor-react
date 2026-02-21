import {type FC} from "react";

type PaginatioPropsType = {
    total: number,
    perPage: number,
    page: number
    onPageChange: (page: number) => void
}

const PaginationComponent: FC <PaginatioPropsType> = ({total, perPage, page, onPageChange}) => {

    //const [currentPage, setCurrentPage] = useState <number>(1);

    const pagesCount = Math.ceil(total/perPage);
    const pages = Array.from({length: pagesCount}, (_,i) => i+1);
    console.log(pages)

    const changePage = (page: number) =>{
        onPageChange(page);
        //setCurrentPage(page);
    }





    return (

        <div>

            <ul style={{display: "flex", listStyle: "none", gap: "30px"}}>
                {pages.map(pageItem => (

                    <li style={{
                        padding: "8px 12px",
                        backgroundColor: pageItem == page ? "green" : "gray"
                    }} key={pageItem} onClick={ ()=> changePage(pageItem)}>{pageItem}</li>
                ))}
            </ul>

        </div>
    );
};

export default PaginationComponent;