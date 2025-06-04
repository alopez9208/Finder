export function filtrarYOrdenar(lista, search, keyFiltro, sortConfig) {
    const filtrado = lista.filter((item) => {
        const valor = item[keyFiltro]?.toLowerCase() || '';
        return valor.includes(search.toLowerCase());
    });

    const ordenado = filtrado.sort((a, b) => {
        if (!sortConfig.key) return 0;

        const aVal = a[sortConfig.key];
        const bVal = b[sortConfig.key];

        const aNum = Number(aVal);
        const bNum = Number(bVal);

        if (!isNaN(aNum) && !isNaN(bNum)) {
            return sortConfig.direction === "asc" ? aNum - bNum : bNum - aNum;
        }

        const aStr = aVal?.toString().toLowerCase() || '';
        const bStr = bVal?.toString().toLowerCase() || '';

        if (aStr < bStr) return sortConfig.direction === "asc" ? -1 : 1;
        if (aStr > bStr) return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
    });

    return ordenado;
}
