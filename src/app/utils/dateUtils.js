  export const formatFecha = (isoString) => {
    if (!isoString) return "";
    const date = new Date(isoString);
    date.setDate(date.getDate() + 1);
    const year = date.getFullYear().toString();
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  
  export const parseDate = (dateValue, isStart = true) => {
    if (!dateValue) return null;
    if (dateValue instanceof Date) return dateValue;
    if (dateValue.includes("T")) return new Date(dateValue);
    if (/^\d{4}-\d{2}-\d{2}$/.test(dateValue)) {
      return new Date(`${dateValue}T${isStart ? "00:00:00" : "23:59:59"}-05:00`);
    }
    return null;
  };
  
  