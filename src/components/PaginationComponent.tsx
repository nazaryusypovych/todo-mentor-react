import type {FC} from "react";

type PaginatioPropsType = {
    total: number,
    perPage: number
    onPageChange: (page: number) => void
}

const PaginationComponent: FC <PaginatioPropsType> = ({total, perPage, onPageChange}) => {

    const pagesCount = Math.ceil(total/perPage);
    const pages = Array.from({length: pagesCount}, (_,i) => i+1);
    console.log(pages)




    return (

        <div>

            <ul style={{display: "flex", listStyle: "none", gap: "30px"}}>
                {pages.map(page => (
                    <li key={page} onClick={ ()=> onPageChange(page)}>{page}</li>
                ))}
            </ul>

        </div>
    );
};

export default PaginationComponent;