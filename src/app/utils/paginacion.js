export function paginar(lista, currentPage, itemsPerPage) {
    const totalPages = Math.ceil(lista.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const visibles = lista.slice(startIndex, startIndex + itemsPerPage);

    return {
        totalPages,
        visibles,
    };
}
