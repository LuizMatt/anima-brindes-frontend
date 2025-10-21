import { useState, useMemo, useEffect } from "react";
import {
    Pagination,
    PaginationEllipsis,
    PaginationItem,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

import {StyledContent, BaseButton, PageLink} from "./Pagination.style.js"

export default function PaginationComponent({
    totalPages = 10,
    initialPage = 1,
    maxVisiblePages = 3,
    onPageChange,
}) {
    const [currentPage, setCurrentPage] = useState(initialPage);

    useEffect(() => {
        setCurrentPage(initialPage);
    }, [initialPage]);

    const goToPage = (page) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
        onPageChange?.(page);
    };


    const pageLinks = useMemo(() => {
        const pages = [];
        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) pages.push(i);
        } else {
            pages.push(1);
            const start = Math.max(2, currentPage - 1);
            const end = Math.min(totalPages - 1, currentPage + 1);

            if (start > 2) pages.push("ellipsis");
            for (let i = start; i <= end; i++) pages.push(i);
            if (end < totalPages - 1) pages.push("ellipsis");
            pages.push(totalPages);
        }
        return pages;
    }, [currentPage, totalPages, maxVisiblePages]);

    return (
        <Pagination>
            <StyledContent>
                <PaginationItem>
                    <BaseButton as={PaginationPrevious}
                        onClick={() => goToPage(currentPage - 1)}
                        disabled={currentPage === 1}
                        aria-label="Página anterior"
                    />
                </PaginationItem>

                {pageLinks.map((p, idx) => (
                    <PaginationItem key={idx}>
                        {p === "ellipsis" ? (
                            <PaginationEllipsis />
                        ) : (
                            <PageLink
                                onClick={() => goToPage(p)}
                                aria-current={p === currentPage ? "page" : undefined}
                                $active={p === currentPage}
                            >
                                {p}
                            </PageLink>
                        )}
                    </PaginationItem>
                ))}

                <PaginationItem>
                    <BaseButton as={PaginationNext}
                        onClick={() => goToPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        aria-label="Próxima página"
                    />
                </PaginationItem>
            </StyledContent>
        </Pagination>
    );
}